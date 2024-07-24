import 'client-only';

import { toast } from 'react-toastify';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { auth } from '@/firebase';
import { errorMessageGeneral } from '@/lib/config';
import { authError } from '@/lib/utils/error';

export const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const googleLogin = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (err) {
    toast.error(errorMessageGeneral);
    const error: Error = { name: 'Auth Error', message: err };
    authError(error);
  }
};

export const logOut = async () => {
  try {
    return auth.signOut();
  } catch (err) {
    toast.error(errorMessageGeneral);
    authError(err);
  }
};
