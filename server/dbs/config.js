export default {
    dbs: 'mongodb://127.0.0.1:27017/student',
    redis: {
        get host() {
            return '127.0.0.1'
        },
        get port() {
            return 6379
        }
    },
    smtp: {
        get host() {
            return 'smtp.qq.com'
        },
        get user() {
            return '326897850@qq.com'
        },
        get pass() {
            return 'hyjtjpxetvxcbgci'//生成唯一授权码,每个人不一样
        },
        get code() {
            return () => {
                return Math.random().toString(16).slice(2, 6).toUpperCase()
            }
        },
        get expire() {
            return () => {
                return new Date().getTime() + 60 * 60 * 1000
            }
        }
    }
}