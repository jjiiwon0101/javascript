//필요한 데이터: 랜덤 숫자, 횟수카운트, 카운트다운, 최소값, 최대값

//최대범위를 저장할 변수
const MAX = 100;

//게임에 필요한 데이터를 모아놓을 객체
const gameData = {
    secret_num : Math.floor(Math.random()*MAX) + 1,
    count : 0,
    countdown : 6,
    min : 1,
    max : MAX
};

////////////////////////함수 정의부///////////////////////////////

//사용자의 입력을 수행하는 함수
function inputNumber() {

    //객체에서 min과 max의 값을 뽑아서 메세지를 완성.
    //객체 디스트럭쳐링으로 뽑아 보세요~
    const {min, max} = gameData;


    //사용자의 입력값을 객체에 추가
    gameData.answer = +prompt(`숫자를 맞춰보세요!!! [${min} ~ ${max}]`);
    

    //입력값 검증 함수를 호출.
    return checkNumber();
}

//사용자의 입력값을 검증하는 함수
function checkNumber() {

    const {secret_num, count, answer, countdown} = gameData;

    gameData.count++;
    gameData.countdown--;

    if(answer === secret_num) {
        alert('정답입니다!q(≧▽≦q)' + count + '번 만에 맞추셨습니다!');
        checkCountDown(countdown);
        return true;

    } else if(answer < secret_num) {
        alert('Up');
        gameData.max = gameData.answer+1;
        
    } else if(answer > secret_num) {
        alert('Down');
        gameData.max = gameData.answer-1;
    }
    
        alertCountDown(gameData.countdown);
        return false;
    }


//사용자의 카운트다운을 체크하여 승리 여부를 알려주는 함수
function checkCountDown(countdown) {
    if(countdown > 0) {
        alert('승리하셨습니다 o(≧▽≦)o ');
        checkCountDown();
        return;
    } else {
        alert('정답 횟수를 초과하여 패배하셨습니다...');
        
    }
   
}


//사용자의 남은 카운트다운 횟수를 알려주는 함수
function alertCountDown(countdown) {
    if(countdown > 0) {
        alert(`기회는 ${countdown}번 남았습니다.`);

    } else if(countdown === 0) {
        alert('문제풀이 기회를 모두 소진하셨습니다...\n남은 게임을 마저 진행합니다.');

    }
  
}


//핵심 실행부 (main의 역할을 하는 함수)
//즉시 실행 함수로 선언하여 따로 호출하지 않아도
//바로 실행될 수 있도록 작성.

(function() {
    alert('[UP & DOWN 게임 - 1 ~ 100 사이의 숫자를 맞춰보세요!]');

    //입력을 담당하는 함수를 호출할 예정.
    while(!inputNumber()) {
        //true가 리턴되면 프로그램 종료.
        //false가 리턴되면 게임 계속 진행.
    }

}());