import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserI } from 'src/app/models/PostInterfaces/users';
import { UsersService } from 'src/app/services/HttpServices/users.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { faHomeUser, faMessage } from '@fortawesome/free-solid-svg-icons';
import { UserUp } from '../../../../models/LoginInterfaces/user-up';
import { PostService } from 'src/app/services/HttpServices/post.service';
import { AdsService } from 'src/app/services/HttpServices/ads.service';
import { Posts } from 'src/app/models/PostInterfaces/posts';
import { Router } from '@angular/router';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../../services/AuthServices/auth.service';
import { SignInService } from '../../../../services/LoginServices/sign-in.service';
import { SignUp } from '../../../../models/LoginInterfaces/sign-up';
import { faSplotch } from '@fortawesome/free-solid-svg-icons';
import { LoadscriptsService } from '../../../../services/InterfaceServices/loadscripts.service';

@Component({
  selector: 'app-post-accounts',
  templateUrl: './post-accounts.component.html',
  styleUrls: ['./post-accounts.component.scss']
})
export class PostAccountsComponent implements OnInit {
  user: UserUp[] | any;
  post!:Posts[];
  profile!: SignUp[];
  userChat!: UserI[];
  ad: Array<any> = [1]
  numberOfLikes : number = 0;
  faMsg = faMessage;
  faHome = faHomeUser;
  faComment = faComment;
  faGear = faGear;
  faHeart = faHeart;
  faPaw = faPaw;
  faHandHoldingHeart = faHandHoldingHeart;
  faUsers = faUsers;
  faPlus = faPlus;
  faUser = faUser;
  faRightFromBracket = faRightFromBracket;
  faMobileScreenButton = faMobileScreenButton;
  faSmile = faSplotch;
  faLanguage = faLanguage;
  constructor(private activatedRouter:ActivatedRoute, private users:UsersService, private http:HttpClient, public posts:PostService, private ads:AdsService, private usersChat:UsersService, private router:Router, public authService:AuthService, private sign:SignInService, private loadScripts:LoadscriptsService) { }

  dataUser!: UserI;

  showUser = new FormGroup({
    first_Name: new FormControl(''),
    surname: new FormControl(''),
    username: new FormControl('')
  })

  ngOnInit(): void {
    let userId = this.activatedRouter.snapshot.paramMap.get('id')
    console.log(userId)
    this.users.getAUser(userId).subscribe(res =>{
      this.dataUser = res;
      this.showUser.setValue({
        'first_Name': this.dataUser.first_Name,
        'surname': this.dataUser.surname
      })
    })
    this.posts.getPost().subscribe(data =>{
      this.post = data;
    })
    this.usersChat.getUser().subscribe(res =>{
      this.userChat = res;
    })
    this.sign.getProfile().subscribe(res =>{
      this.profile = res;
    })
  }
  editPost(id:any){
    this.router.navigate(['Edit/En', id])
  }
  viewProfile(id:any){
    this.router.navigate(['Accounts/En', id])
  }
  likeButtonClick() {
    this.numberOfLikes++;
  }
  }

