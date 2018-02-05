import { AbstractControl } from "@angular/forms";
import { Validator, ValidationErrors } from "@angular/forms";
import { resolve } from "dns";
import { reject } from "q";

export class UsernameValidators{
    static cannotContainSpace(control : AbstractControl) : ValidationErrors | null{
        if ((control.value as string).indexOf(' ') >=  0)
            return { cannotContainSpace : true  }
            return null;
            }
          
    static shouldBeUnique(control : AbstractControl) : Promise<ValidationErrors | null>{
        return new Promise((resolve,reject)=>{
             
        setTimeout (()=>{
            if (control.value === 'saba')
            resolve({ shouldBeUnique : true});
            else  resolve (null);
        },2000) 
        });
    
        
      //  return null;
   
    }
   }
