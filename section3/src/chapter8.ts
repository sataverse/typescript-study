/*
서로소 유니온 타입
-> 교칩합이 없는 타입들로만 만든 유니온 타입
*/

type Admin = {
    tag: "ADMIN";
    name: string;
    kickCount: number;
};
type Member = { 
    tag: "MEMBER";
    name: string;
    point: number;
};
type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
}

type User = Admin | Member | Guest;

function login(user: User) {
    if('kickCount' in user) {
        user
    }
    else if('point' in user) {
        user
    }
    else if('visitCount' in user) {
        user
    }
}

// 교집합이 존재할 수 없음! 스트링 리터럴 타입 프로퍼티가 존재하기 때문에 서로소 유니온 상태
function login2(user: User) {
    if(user.tag === "ADMIN") {
        user
    }
    else if(user.tag === "MEMBER") {
        user
    }
    else {
        user
    }
}



type LoadingTask = {
    state: "LOADING";
};

type FailedTask = {
    state: "FAILED";
    error: {
        message: string;
    };
};

type SuccessTask = {
    state: "SUCCESS";
    response: {
        data: string;
    };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

/*
type AsyncTask = {
    state: "LOADING" | "FAILED" | "SUCCESS";
    error?: {
        message: string;
    };
    response?: {
        data: string;
    };
};
*/

function processResult(task: AsyncTask) {
    switch(task.state) {
        case "LOADING": {
            task
            break;
        }
        case "FAILED": {
            task.error.message
            break;
        }
        case "SUCCESS": {
            task.response.data
            break;
        }
    }
}

const loading: AsyncTask = {
    state: "LOADING",
};

const failed: AsyncTask = {
    state: "FAILED",
    error: {
        message: "error 404 not found",
    },
};

const success: AsyncTask = {
    state: "SUCCESS",
    response: {
        data: "data",
    },
};