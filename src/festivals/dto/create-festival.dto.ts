import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class CreateFestivalDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
   file: any; // Change the type according to your file handling logic

  @IsNotEmpty()
  @IsDate()
  startDate: Date;

  @IsNotEmpty()
  @IsDate()
  endDate: Date;
}
