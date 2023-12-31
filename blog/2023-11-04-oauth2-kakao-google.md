# Oauth2 흐름(카카오, 구글)

이번 프로젝트에서 로그인을 소셜로그인을 선택했고, 깨달은점이 많아 정리 해보려고합니다.

<!--truncate-->


# 카카오
![](/img/oauth2/Untitled.png)

다음은 카카오 공식문서에서 제공하는 로그인 api 흐름입니다. 본인은 자바 스프링을 사용해서, 스프링이 제공하는 시큐리티의 기능을 이용하면 위의 일련의 과정들을 몰라도 구현가능했는데, 이번에 프론트와 협업할 기회가 생기면서 각 과정들을 자세히 이해할 필요성을 느꼈으며,   그렇기에 위 흐름을 하나하나 따라가고자 합니다.

![](/img/oauth2/Untitled1.png)

**Step 1** 은 auth Server에서 무엇을 받을지(이름, 이메일, 프로필 등..)를 동의(인가) 받는 과정입니다.

![](/img/oauth2/Untitled2.png)

설정해둔 {REDIRECT URI}?code="" 에 인가코드가 담겨옵니다.

**Step 2** 에서 이 인가코드를 바디에 담아 post로 요청을 보내야합니다.

여기서 선택지가 생겼습니다.

1. **로그인버튼(백엔드로 바로 요청), REDIRECT URI 를 백엔드에 설정, 시큐리티를 사용.**
2. **로그인버튼(백엔드로 바로 요청), REDIRECT URI 를 백엔드에 설정, 시큐리티 사용 x**
3. **로그인버튼(카카오로 요청해 인가코드 받음) REDIRECT URI 를 프론트에 설정, 시큐리티 사용 x**

구글링을 하다보면 사람들마다 구현한 방식들이 조금씩 달랐는데, 위 선택지 때문에 생긴것임을 깨달았습니다. 

앞에서 언급한대로, 시큐리티는 사용하지 않을것이므로 1번방법은 제외. REDIRECT URI를 어디다 둘 것인지 정해야합니다. 우리는 프론트와 일을 나누어서 할 생각으로 3번을 선택했습니다.

구현을 하다보니, 2번방법이 올바른 방법임을 깨달았습니다. 스스로 확신하는 이유는 결국 코드가 잘 동작하는지 테스트 해보려면 백엔드에서 직접받아볼 수 밖에 없기 때문입니다.

![](/img/oauth2/Untitled3.png)

나중에 찾아보니 카카오 개발자분도 이 방법을 기본으로 생각하고 있는 모습을 볼 수 있습니다.

### 구현코드

![](/img/oauth2/Untitled4.png)

명시한 REDIRECT URI로 인가코드를 받아주는 컨트롤러입니다.

![](/img/oauth2/Untitled5.png)

인가코드를 바탕으로 토큰을 생성합니다. 이 토큰을 가지고 사용자 정보를 요청합니다.

![](/img/oauth2/Untitled6.png)

실제 요청하는 부분이다. API 문서에서 필요한 헤더와 바디를 구성하고 실제로 요청하는 부분입니다.

# 구글

솔직히 말씀드리면, 구글 API 문서는 난해하고 복잡합니다.  실제로 구글링을 해보면 위 처럼 일련의 과정들을 따라가면서 구현해본 코드가 거의 없습니다. (대부분 시큐리티 사용) 추가로 구글은 사용자 정보를 추가로 얻으려면 People API 라는 다른 API를 사용해야합니다. 

이것마저도 공식문서가 여러군대에 숨겨져 있어 프론트분과 힘들게 찾았습니다. People API를 사용하는 예제는 찾아볼 수 없었지만, 할 수 있습니다. 카카오 로그인을 구현하면서 과정들을 확실히 이해했기 때문입니다.

![](/img/oauth2/Untitled8.png)

People API 사용을 추가하니, 기존에 email과 profile의 접근 범위가 바뀌었습니다. 기존 코드도 수정해야하나 궁금해서 그대로 나두고 실험해보니 기존꺼로도 정상적으로 동작합니다. (범위가 userInfo로 시작하면 default값으로 처리되는지 추측합니다)

### 구현코드

![](/img/oauth2/Untitled9.png)

카카오와 다른점은 액세스 토큰 요청 시, clientSecret값을 필수로 보내줘야하는 점입니다.

![](/img/oauth2/Untitled10.png)

**[https://developers.google.com/identity/protocols/oauth2/web-server?hl=ko#exchange-authorization-code](https://developers.google.com/identity/protocols/oauth2/web-server?hl=ko#exchange-authorization-code)**

(인가코드 요청하는 엔드포인트를 찾았습니다.)

카카오와 비슷한 부분의 코드는 스킵하고 관련 공식 문서 링크만 추가하겠습니다.

![](/img/oauth2/Untitled11.png)

[https://developers.google.com/identity/protocols/oauth2/web-server?hl=ko#exchange-authorization-code](https://developers.google.com/identity/protocols/oauth2/web-server?hl=ko#exchange-authorization-code)

카카오와 다른점은 쿼리파라미터로도 액세스토큰을 넘길 수 있다는 점입니다.

![](/img/oauth2/Untitled12.png)

[https://developers.google.com/identity/openid-connect/openid-connect?hl=ko#obtaininguserprofileinformation](https://developers.google.com/identity/openid-connect/openid-connect?hl=ko#obtaininguserprofileinformation)

![](/img/oauth2/Untitled13.png)

/tokenInfo가 사용자 정보를 요청하는 엔드포인트고 추가정보를 얻기 위해서는 위에 표시해둔 엔드포인트로 요청을 보내야합니다. 그런데, account_id를 추가로 전달해야하는데 이에대한 정보가 적혀있지 않았습니다.

![](/img/oauth2/Untitled14.png)

[https://developers.google.com/people/api/rest/v1/people/get?hl=ko&apix_params=%7B%22resourceName%22%3A%22people%2Fme%22%2C%22personFields%22%3A%22genders%2Cbirthdays%22%7D](https://developers.google.com/people/api/rest/v1/people/get?hl=ko&apix_params=%7B%22resourceName%22%3A%22people%2Fme%22%2C%22personFields%22%3A%22genders%2Cbirthdays%22%7D)

오른쪽에 people api를 요청해볼 수 있는 예제가 있었습니다. 실제로 날려서 accountId값을 확인해보았는데, 로그인 api에서 받은 sub값과 동일했습니다. sub값을 추출하고 전달하는 형태로 로그인 api와 people api 를 합쳐 구현하는데에 성공했습니다.

로그인 기능이 단순해 보일 수는 있어도, 구현방법에 따라, 접근하는 수준에 따라 난이도가 천차만별로 변경될 수 있다는 걸 알게되었습니다.
