import { Injectable, Options } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { config } from 'src/models/config.model';
import { Auth, getAuth } from 'firebase/auth'
import {CollectionReference, Firestore, collection, getFirestore} from 'firebase/firestore'
@Injectable()
export class FirebaseService {
    public app:FirebaseApp  ;
    public auth:Auth;
    public firestore:Firestore
    public usersCollection: CollectionReference;
    constructor(private readonly configService:ConfigService<config>){
    this.app=initializeApp({
        apiKey: configService.get<string>('apiKey'),
        appId: configService.get<string>('appId'),
        authDomain: configService.get<string>('authDomain'),
        messagingSenderId: configService.get<string>('messagingSenderId'),
        projectId: configService.get<string>('projectId'),
        storageBucket: configService.get<string>('storageBucket'),
      });
           this.auth=getAuth(this.app)
           this.firestore=getFirestore(this.app)
           this._createcollection()
    }
    private _createcollection(){
                  this.usersCollection = collection(this.firestore,"users")
    }
}
