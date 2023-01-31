type person_Adimn=Admin|User;
interface User {
    [key:string]:any;
    age:number
    name:string
occupation:string
}

interface Admin  {
    [key:string]:any;
    age:number
    name:string
    specialty:string
}



let user :User[]= [
    { age:25,name:'alaa',occupation:'Web Developr'},
    
    { age:22,name:'sara',occupation:'Marketing manager'},
    
    
    { age:30,name:'noor',occupation:'Food scientist'}
    ]

    let Admin:Admin[]=[

    { age:34,name:'saad',specialty:'computer Science'},
    { age:45,name:'kahled',specialty:'Informtion System'},
    { age:37,name:'lama',specialty:'Informtion Technology'}]


    function Per(arr_Prson:User[]){
       

        for (let i of arr_Prson ) {
            
            console.log(`Age: ${i.age}, Name: ${i.name}, Occupation: ${i.occupation}`);
        }
        }
     




    let Persone :person_Adimn[]=[ 
        
 { age:25,name:'alaa',occupation:'Web Developr'},
    
    { age:22,name:'sara',occupation:'Marketing manager'},
    
    
    { age:30,name:'noor',occupation:'Food scientist'},
    { age:34,name:'saad',specialty:'computer Science'},
    { age:45,name:'kahled',specialty:'Informtion System'},
    { age:37,name:'lama',specialty:'Informtion Technology'}
]

console.log(Per(user));


        function Persone1(arr_Prson:person_Adimn[]){
       


            for (let i of arr_Prson ) {

                if("occupation" in arr_Prson){

                console.log(`Age: ${i.age}, Name: ${i.name}, Occupation: ${i.occupation}`);
            }

            else if("specialty" in arr_Prson){
                console.log(`Age: ${i.age}, Name: ${i.name}, specialty: ${i.specialty}`);
                

            }

            }

            }



            console.log(Persone1(Persone));

            function age1(age:number){
for( let age of Persone)
 {
    if('age' in Persone){
        console.log(`Age: ${age.age}`);
        
    }

 }           }

           

 console.log(age1(33));
 
            
            export{}
