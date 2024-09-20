import { ResultColor } from '@/app/lib/constants';

const getColorForResultBox = (result: number)=>{
  switch (result){
  case 2:
    return ResultColor.BLACK;
  case 1:
    return ResultColor.WHITE;
  case 0:
    return ResultColor.GREY;
  default:
    return ResultColor.GREY;
  }
};

export default getColorForResultBox;
