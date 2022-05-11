export class Client{
    constructor(
        public nom :string ='' , 
        public prenm:string ='',
        public email:string='',
        public password:string=''
    ){}
}
    export class ClientLoginDto {
        constructor(
            public email:string='',
            public password:string=''
        ){}
        
    }
