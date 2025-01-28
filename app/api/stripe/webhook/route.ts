// app/api/stripe/webhook/route.ts
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-08-16'
});

export async function POST(req: Request) {
    const body = await req.text();
    const signature = req.headers.get('stripe-signature')!;
    
    const supabase = createClient<Database>(
      process.env.NEXT_PUBLIC_SUPABASE_URL as string,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
    );
  
    const getCreditsAmount = async (userId: string) => {
      const { data } = await supabase
        .from('credits')
        .select('credits')
        .eq('user_id', userId)
        .single();
      return data?.credits ?? 0;
    };
  
    const getCreditsFromAmount = (amount: number) => {
      return Math.floor(amount / 100); // Convert cents to credits
    };
  
    try {
      const event = stripe.webhooks.constructEvent(
        body,
        signature, 
        process.env.STRIPE_WEBHOOK_SECRET!
      );
  
      if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.client_reference_id;
  
        if (!userId) {
          throw new Error('No user ID provided');
        }
  
        const currentCredits = await getCreditsAmount(userId);
        const creditsToAdd = getCreditsFromAmount(session.amount_total || 0);
  
        const { error } = await supabase
          .from('credits')
          .update({ 
            credits: currentCredits + creditsToAdd
          })
          .eq('user_id', userId);
  
        if (error) {
          return NextResponse.json({ error: error.message }, { status: 400 });
        }
      }
  
      return NextResponse.json({ received: true });
    } catch (err) {
      return NextResponse.json(
        { error: 'Webhook error' },
        { status: 400 }
      );
    }
  }