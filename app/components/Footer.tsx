"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Instagram, Mail, Phone, Linkedin, Facebook, Youtube } from "lucide-react";

// Custom Brand Icons
const PinterestIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.171-.105-.949-.2-2.404.041-3.438.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.667.967-2.912 2.168-2.912 1.021 0 1.516.767 1.516 1.687 0 1.026-.653 2.559-.99 3.979-.283 1.194.599 2.169 1.776 2.169 2.131 0 3.768-2.247 3.768-5.49 0-2.869-2.062-4.875-5.005-4.875-3.409 0-5.41 2.557-5.41 5.199 0 1.03.396 2.133.89 2.733.098.119.112.223.083.342-.09.375-.291 1.187-.33 1.347-.052.21-.17.255-.392.153-1.46-.68-2.37-2.812-2.37-4.524 0-3.682 2.674-7.065 7.712-7.065 4.05 0 7.197 2.885 7.197 6.742 0 4.024-2.536 7.261-6.056 7.261-1.183 0-2.295-.615-2.675-1.336l-.728 2.774c-.263 1.002-.975 2.259-1.451 3.033A11.966 11.966 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const TikTokIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.24-2.62 1.04-5.22 3.21-6.72.96-.67 2.03-1.14 3.2-1.31.06 1.4.03 2.8 0 4.2-.61.12-1.22.38-1.74.72-1.14.74-1.85 2.01-1.76 3.36.05 1.5.94 2.89 2.26 3.54 1.13.53 2.45.5 3.59-.06 1.29-.63 1.96-2.09 1.83-3.48-.09-2.93-.03-5.85-.03-8.77Z" />
  </svg>
);

const ThreadsIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.03 14.24a2.91 2.91 0 1 1 0-5.82 2.91 2.91 0 0 1 0 5.82zm0-7.82c-.82 0-1.62.16-2.37.47-2.61 1.09-3.46 3.96-3.46 5.35 0 2.23 1.25 3.55 2.68 4.1.84.34 1.8.44 2.7.35 1.8-.18 3.13-.88 3.13-2.9 0-3.35-2.73-5.23-5.58-5.23-2.81 0-5.1 1.84-5.1 5.3 0 3.03 1.8 5.76 5.1 5.76 1.48 0 2.79-.53 3.39-.93.36-.24.78-.18 1.06.14.28.32.1.84-.25 1.08-.7.49-2.22 1.19-4.2 1.19-4.32 0-7.14-3.58-7.14-7.24 0-4.52 3.11-7.24 7.14-7.24 3.75 0 7.62 2.4 7.62 6.94 0 3.07-1.56 5-4.46 5.56-1.16.22-2.34.18-3.46-.11a4.2 4.2 0 0 1-2.92-3.86c0-1.16.51-3.64 2.81-4.75a4.8 4.8 0 0 1 1.91-.4c.96 0 1.88.23 2.6.64.44.25.96.04 1.16-.43.2-.47-.02-1-.44-1.25-1.04-.6-2.26-.82-3.32-.82z" />
  </svg>
);

const SubstackIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.534 8.212H1.466v2.79h21.068v-2.79zm-21.068 5.704v9.641l10.536-6.002 10.532 6.002v-9.641H1.466zM22.534 2.5H1.466v2.79h21.068V2.5z" />
  </svg>
);


export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubscribe = async (e: any) => {
    e.preventDefault();

    if (!email) {
      setMsg("Enter a valid email");
      return;
    }

    setLoading(true);
    setMsg("");

    try {
      const res = await fetch(
        "https://api.beehiiv.com/v2/publications/pub_00000000-0000-0000-0000-000000000000/bulk_subscriptions",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer YOUR_TOKEN_HERE",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subscriptions: [
              {
                email,
                reactivate_existing: false,
                send_welcome_email: true,
              },
            ],
          }),
        }
      );

      if (res.ok) {
        setMsg("Subscribed successfully");
        setEmail("");
      } else {
        setMsg("Something went wrong");
      }
    } catch {
      setMsg("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#faf8f5] text-[#1c1c1c] pt-20 pb-10 border-t border-[#c9a84c]/20 font-source">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

          {/* Explore */}
          <div className="lg:col-span-2">
            <FooterColumn title="Explore">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/accommodations">Accommodations</FooterLink>
              <FooterLink href="/activities">Activities</FooterLink>
              <FooterLink href="/transport">Transport</FooterLink>
            </FooterColumn>
          </div>

          {/* Connect */}
          <div className="lg:col-span-2">
            <FooterColumn title="Connect">
              <FooterLink href="/youth-coaching">Youth Coaching</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </FooterColumn>
          </div>

          {/* Social */}
          <div className="lg:col-span-3">
            <FooterColumn title="Location">
                <div className="flex flex-col items-center md:items-start gap-2">
            <p>Shelter Cove, CA 95589</p>
            <FooterLink href="https://maps.app.goo.gl/Yo8eTgmWt3v6GKYo6" target="_blank">
              View on Google Maps
            </FooterLink>
          </div>
            </FooterColumn>
          </div>

          {/* ✅ SUBSCRIBE */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6">

            <h4 className="text-sm font-bold tracking-[0.15em] uppercase">
              Subscribe
            </h4>

            <p className="text-sm text-[#1c1c1c]/70 max-w-md">
              Get updates, offers & travel inspiration directly in your inbox.
            </p>

            {/* 🔥 Wider on desktop */}
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-md lg:max-w-xl xl:max-w-2xl"
            >

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 border border-[#c9a84c]/30 bg-transparent text-sm placeholder:text-[#1c1c1c]/40 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 bg-[#1c1c1c] text-white text-sm hover:bg-[#c9a84c] hover:text-black transition"
              >
                {loading ? "..." : "Subscribe"}
              </button>

            </form>

            {msg && (
              <p className="text-xs text-[#1c1c1c]/60">{msg}</p>
            )}

          </div>
        </div>

        {/* Middle */}
        <div className="flex flex-col md:flex-row justify-between items-center text-base text-[#1c1c1c]/80 mb-16 gap-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-2">
            
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p>&copy; Lost Coast Getaways. All rights reserved</p>
            <p className="text-sm">
              Made by{" "}
              <Link
                href="https://softexedge.in/"
                target="_blank"
                className="text-[#c9a84c] hover:text-[#1c1c1c]"
              >
                Softexedge
              </Link>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-[#c9a84c]/20 mb-10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <Link href="/">
            <Image
              src="/images/logo2.png"
              alt="Lost Coast Getaways"
              width={430}
              height={152}
              className="h-12 w-auto"
            />
          </Link>

          <div className="flex flex-wrap justify-center gap-4">
            <SocialIconLink href="https://www.instagram.com/lostcoastgetaways/"><Instagram size={16} /></SocialIconLink>
            <SocialIconLink href="https://www.facebook.com/lostcoastgetaways"><Facebook size={16} /></SocialIconLink>
            <SocialIconLink href="https://www.linkedin.com/in/aurora-m-a9b879249"><Linkedin size={16} /></SocialIconLink>
            <SocialIconLink href="https://www.youtube.com/@lostcoastgetaways"><Youtube size={16} /></SocialIconLink>
            <SocialIconLink href="https://www.tiktok.com/@lostcoastgetaways?_r=1&_t=ZP-96SkjShnVug"><TikTokIcon size={16} /></SocialIconLink>
            <SocialIconLink href="https://x.com/LostCoastGetawz"><XIcon size={16} /></SocialIconLink>
            <SocialIconLink href="https://in.pinterest.com/lostcoastgetaways/"><PinterestIcon size={16} /></SocialIconLink>
            <SocialIconLink href="https://www.threads.net/@lostcoastgetaways"><ThreadsIcon size={16} /></SocialIconLink>
            <SocialIconLink href="https://substack.com/@lostcoastgetaways"><SubstackIcon size={16} /></SocialIconLink>
            <SocialIconLink href="mailto:lostcoastgetaway@gmail.com"><Mail size={16} /></SocialIconLink>
            <SocialIconLink href="tel:707-300-0960"><Phone size={16} /></SocialIconLink>
          </div>

        </div>

      </div>
    </footer>
  );
}

/* Components */

function FooterColumn({ title, children }: any) {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="text-sm font-bold tracking-[0.15em] uppercase">
        {title}
      </h4>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

function FooterLink({ href, children, target }: any) {
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("mailto") ||
    href.startsWith("tel");

  if (isExternal) {
    return (
      <a href={href} target={target} className="text-[#1c1c1c]/80 hover:text-[#c9a84c]">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className="text-[#1c1c1c]/80 hover:text-[#c9a84c]">
      {children}
    </Link>
  );
}

function SocialIconLink({ href, children }: any) {
  return (
    <a
      href={href}
      target="_blank"
      className="w-10 h-10 bg-[#1c1c1c]/5 rounded-full flex items-center justify-center hover:bg-[#c9a84c] hover:text-white transition"
    >
      {children}
    </a>
  );
}