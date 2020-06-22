import { ReactComponent as DumbbellSvg } from '../images/arm-dumbbell.svg';
import { ReactComponent as AntennaDishSvg } from '../images/antenna-dish.svg';
import { ReactComponent as CoffeeSvg } from '../images/coffee.svg';
import { ReactComponent as PhoneSvg } from '../images/phone.svg';
import { ReactComponent as CarSvg } from '../images/car.svg';

export interface ICommonExpense {
  name: string;
  imageComponent?: React.FunctionComponent;
  imageWidth?: number;
  monthlyCost: number;
  description: string;
}

const commonExpenses: ICommonExpense[] = [
  {
    name: 'Gym',
    imageComponent: DumbbellSvg,
    imageWidth: 50,
    monthlyCost: 58,
    description:
      'According to [this article](https://www.healthline.com/health-news/gym-memberships-can-be-a-trap#1), the average American spends around $58 a month on gym memberships. Maybe you should consider trying out [calisthenics](https://en.wikipedia.org/wiki/Calisthenics) since it can be done almost anywhere and the [optional equipment](https://www.amazon.com/s?k=calisthenics+equipment&dc&ref=a9_sc_1) is minimal.',
  },
  {
    name: 'Cable',
    imageComponent: AntennaDishSvg,
    imageWidth: 70,
    monthlyCost: 64,
    description:
      'According to [this article](https://costaide.com/cable-tv-pricing/), the average American spends around $64 a month on cable TV. Maybe you should consider subscribing to streaming service like [Netflix](https://www.netflix.com) instead.',
  },
  {
    name: 'Coffee',
    imageComponent: CoffeeSvg,
    imageWidth: 60,
    monthlyCost: 92,
    description:
      'According to [this article](https://www.fool.com/retirement/2018/01/22/one-third-of-americans-spend-more-on-coffee-than-o.aspx), the average American spends around $92 a month on coffee. Maybe you should consider buying your own [coffee maker](https://www.amazon.com/s?k=coffee+maker)?',
  },
  {
    name: 'Phone',
    imageComponent: PhoneSvg,
    imageWidth: 45,
    monthlyCost: 99,
    description:
      'According to [this article](https://www.cnbc.com/2019/10/25/you-can-save-up-to-268-a-year-by-switching-your-cell-phone-plan.html), the average American spends around $99 a month on cell phone bills. Maybe you should consider switching to a pay-as-you-go plan like [Google Fi](https://fi.google.com/about/)?',
  },
  {
    name: 'Car',
    imageComponent: CarSvg,
    imageWidth: 65,
    monthlyCost: 554,
    description:
      "According to [this article](https://www.creditkarma.com/auto/i/what-is-average-car-payment), the average American spends around $554 a month on car payments for a new vehicle. Maybe you should consider purchasing a [used one](https://www.kbb.com/) instead?\n\nWhile many believe having a car payment in perpetuity is normal (by upgrading it incessantly), you're smarter than that. Plan on owning your vehicle for its entire lifespan.",
  },
];

export default commonExpenses;
