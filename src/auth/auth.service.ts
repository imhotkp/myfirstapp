import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthError, UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { DocumentData, DocumentReference, DocumentSnapshot, doc, getDoc, setDoc } from 'firebase/firestore';
import { FirebaseService } from 'src/firebase/firebase.service';
import { User } from 'src/models/user.model';

@Injectable()
export class AuthService {
constructor(private readonly firebaseService:FirebaseService){}
    public async login(email:string,password:string): Promise<Omit<User, 'password'>>{
    try {
        const userCredential:UserCredential= await signInWithEmailAndPassword(this.firebaseService.auth,email,password)
        if(userCredential){
            const id:string=userCredential.user.uid
            const docRef:DocumentReference=doc(this.firebaseService.usersCollection,id)
           const snapshot:DocumentSnapshot<DocumentData>=await getDoc(docRef)
           const loggedUser:User={...snapshot.data(),id:snapshot.id} as User
           delete loggedUser.password
           return loggedUser
        }
    
    } catch (error) {
        const firebaseError= error as AuthError
        if (firebaseError.code === 'auth/wrong-password') {
            throw new HttpException(
              'Email or password incorrect.',
              HttpStatus.FORBIDDEN,
            );
          }
    
          if (firebaseError.code === 'auth/user-not-found') {
            throw new HttpException('Email not found.', HttpStatus.NOT_FOUND);
          }
        console.log(firebaseError.code)
    }
    }

    public async register(body:Omit<User,'id'>){
   try {
            const userCredential:UserCredential= await createUserWithEmailAndPassword(this.firebaseService.auth,body.email,body.password)
            if (userCredential){
                const id:string=userCredential.user.uid
                const docRef:DocumentReference=doc(this.firebaseService.usersCollection)
               await setDoc(docRef,body)
            } 
        } catch (error) {
            const firebaseError= error as AuthError
        console.log(firebaseError.code)
        }
   


}
}
