import { Button } from '@/components/ui/button';
import {
  OrganizationSwitcher,
  SignInButton,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

export function Header() {
  return (
    <div className="border-b py-4 bg-gray-50">
      <div className="flex container mx-auto items-center justify-between">
        <div className="">FileDrive</div>
        <div className="flex gap-2">
          <OrganizationSwitcher />
          <UserButton />
        </div>
      </div>
    </div>
  );
}
