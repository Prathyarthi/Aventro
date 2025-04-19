import { SignInCard } from "@/features/auth/components/sign-in-card";
import { VerifyUserCard } from "@/features/auth/components/verify-user-card";
import { getCurrent } from "@/features/auth/queries";
import { getWorkspaces } from "@/features/workspaces/queries";
import { redirect } from "next/navigation";

const SignIn = async () => {
  const user = await getCurrent();
  if (!user) return <SignInCard />;
  if (!user.emailVerification) return <VerifyUserCard />;
  else {
    const workspaces = await getWorkspaces();
    if (workspaces.total === 0 && user) {
      redirect("/workspaces/create");
    } else {
      redirect(`/workspaces/${workspaces?.documents[0]?.$id}`);
    }
  }
};

export default SignIn;
