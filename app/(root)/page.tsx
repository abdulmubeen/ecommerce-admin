import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <div className="p-4">
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </div>
  );
};

export default SetupPage;
