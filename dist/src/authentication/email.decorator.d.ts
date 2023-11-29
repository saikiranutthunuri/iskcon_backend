import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class IsEmailConstraint implements ValidatorConstraintInterface {
    validate(email: string): boolean;
}
export declare function IsEmail(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
