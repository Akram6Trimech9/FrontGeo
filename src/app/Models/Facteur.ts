export class Facteur{
    constructor(
        public nom :string ='' , 
        public prenm:string ='',
        public email:string='',
        public password:string=''
    ){}
}
    export class FacteurLoginDto {
        constructor(
            public email:string='',
            public password:string=''
        ){}
        
    }
