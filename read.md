readme.md

Firebase V9 업데이트 되면서. 이슈가 생겼습니다. 이에 코드의 큰 변경 없이 버전 9.0 을 사용하기 위해서. Firebase 의 'compat' 호환 버전 사용을 권장합니다.
또한 React Router Dom 이 버전 6 으로 업데이트 되었습니다. 따라서 수강하시는 동안 버전 6으로 업그레이드 하지 말고. 버전 5 유지를 권장합니다.
Firebase 설치시 npm i firebase 을 하지마시고.
npm i firebase@9.6.1 이와 같이 입력하세요.
React Router Dom 설치시 npm i react-router-dom 을 하지마시고.
npm i react-router-dom@5.3.0 이와 같이 입력하세요.
Firebase 을 import 할 때. 아래와 같이 입력하세요.

FirebaseV9 has been updated. An issue has occurred. This is to use version 9.0 without any significant code changes.
We recommend that you use a "compat" compatible version of Firebase.
Also, ReactRouterDom was updated to version 6. Therefore, do not upgrade to version 6 during the course. We recommend that you maintain version 5.
Do not use npmifirebase when installing Firebase.
npm i firebase@9.6.1 Enter:
Do not install npmiract-router-dom when installing ReactRouterDom.
npm i react-router-dom@5.3.0 Enter:
This is when you import Firebase. Please enter:

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
