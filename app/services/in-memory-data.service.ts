import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let users = [
            {
                id: 1,
                name: 'Jatai',
                email: '565735954@qq.com',
                phone: '15077107380',
                des: 'smart'
            },
            {
                id: 2,
                name: 'Li Lei',
                email: 'em@123.com',
                phone: '110',
                des: 'ugly'
            },
            {
                id: 3,
                name: 'Han Meimei',
                email: 'em2@qq.com',
                phone: '119',
                des: 'beautiful'
            },
            {
                id: 4,
                name: 'Jim',
                email: 'em3@qq.com',
                phone: '120',
                des: 'hideous'
            }
        ]

        return { users }
    }
}
