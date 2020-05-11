import pgp from "pg-promise";

export class AccountRepository {
    static _dbConnection: any;

    static getDbConnection = () => {
        if (!AccountRepository._dbConnection) {
            AccountRepository._dbConnection = pgp()(String(process.env.PGURL))
        }

        return AccountRepository._dbConnection;
    };

    static checkDB = () => {
        AccountRepository.getDbConnection().one('SELECT $1 AS value', 123)
            .then(function (data: any) {
                console.log('DATA:', data.value)
            })
            .catch(function (error: any) {
                console.log('ERROR:', error)
            });
    }
}