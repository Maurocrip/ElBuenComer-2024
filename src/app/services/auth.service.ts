<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { baseUserData, client, completeUserData, employe, userAccessData } from '../Interfaces/user';
import { enumProfile } from '../enums/profile';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public logedUserData! : any;
  public isLogued : boolean;

   constructor(private auth : Auth) 
   { 
     this.isLogued = false;
   }
 
   /*
   Verlo luego
   */
   public logUserData(userLogedData : any)
   {
     this.logedUserData = userLogedData;
     this.isLogued = true;
   }

   public register(userAccessData : userAccessData)
   {
     return createUserWithEmailAndPassword(this.auth, userAccessData.email, userAccessData.password)
   }
 
   public logIn(userAccessData : userAccessData)
   {
     return signInWithEmailAndPassword(this.auth, userAccessData.email, userAccessData.password);
   }     

   public getAuthUser()
   {
     return this.auth.currentUser;
   }
 
   public logOut()
   {
     this.isLogued = false;
     return signOut(this.auth);
   }

   public changeCurrentUser(authUser : User, userData : any)
   {
    this.auth.updateCurrentUser(authUser);
    this.logedUserData = userData;
   }

   public getUserProfile() : enumProfile
   {
      return (<baseUserData>this.logedUserData).profile;
   }
}
=======
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { baseUserData, client, completeUserData, employe, userAccessData } from '../interfaces/user';
import { enumProfile } from '../enums/profile';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public logedUserData! : any;
  public isLogued : boolean;

   constructor(private auth : Auth) 
   { 
     this.isLogued = false;
   }
 
   /*
   Verlo luego
   */
   public logUserData(userLogedData : any)
   {
     this.logedUserData = userLogedData;
     this.isLogued = true;
   }

   public register(userAccessData : userAccessData)
   {
     return createUserWithEmailAndPassword(this.auth, userAccessData.email, userAccessData.password)
   }
 
   public logIn(userAccessData : userAccessData)
   {
     return signInWithEmailAndPassword(this.auth, userAccessData.email, userAccessData.password);
   }     

   public getAuthUser()
   {
     return this.auth.currentUser;
   }
 
   public logOut()
   {
     this.isLogued = false;
     return signOut(this.auth);
   }

   public changeCurrentUser(authUser : User, userData : any)
   {
    this.auth.updateCurrentUser(authUser);
    this.logedUserData = userData;
   }

   public getUserProfile() : enumProfile
   {
      return (<baseUserData>this.logedUserData).profile;
   }
}
>>>>>>> main
