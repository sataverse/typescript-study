/*
프로미스
*/

const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
        // reject(40);
    }, 3000);
});

promise.then(res => {
    // 타입 정의 변수가 없으면 기본적으로 비동기 처리의 결과 값이 unknown 타입으로 추론
    console.log(res * 10);
}).catch(err => {
    // 에러 타입은 any : 매개변수의 타입을 정확하게 알 수 없음
    if (typeof err === "string") {
        console.log(err);
    }
});

/*
프로미스를 반환하는 함수의 타입을 정의
*/
interface Post {
    id: number;
    title: string;
    content: string;
}

function fetchPost() : Promise<Post> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                title: "title",
                content: "content",
            });
        }, 3000);
    });
}

const postRequest = fetchPost();
postRequest.then((post) => {
    post.id
})