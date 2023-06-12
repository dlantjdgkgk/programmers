function solution(myString, pat) {
    let result = '';
    let last = myString.lastIndexOf(pat) + pat.length;
    
    console.log(last)

    result = myString.substr(0, last);
    
    // lastIndexOf() 메서드는 주어진 값과 일치하는 부분을 
    // fromIndex로부터 역순으로 탐색하여, 최초로 마주치는 인덱스를 반환합니다
    //substr() 메서드는 문자열에서 특정 위치에서 시작하여 특정 문자 수 만큼의 문자들을 반환합니다.

    return result;
}