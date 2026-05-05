import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <SignIn routing="path" path="/sign-in" appearance={{
        elements: {
          rootBox: "z-10",
          card: "bg-background/80 backdrop-blur-xl border border-white/10 shadow-2xl",
          headerTitle: "text-foreground",
          headerSubtitle: "text-muted-foreground",
          socialButtonsBlockButton: "border-white/10 hover:bg-white/5 text-foreground",
          socialButtonsBlockButtonText: "text-foreground",
          dividerLine: "bg-white/10",
          dividerText: "text-muted-foreground",
          formFieldLabel: "text-foreground",
          formFieldInput: "bg-background border-white/10 text-foreground focus:ring-violet-500",
          formButtonPrimary: "bg-violet-600 hover:bg-violet-700 text-white",
          footerActionText: "text-muted-foreground",
          footerActionLink: "text-violet-400 hover:text-violet-300",
        }
      }} />
    </div>
  );
}
