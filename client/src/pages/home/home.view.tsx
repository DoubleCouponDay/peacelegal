import React from "react";
import "../../App.css";
import { templaterow } from "../../models";
import profilepic from "../../resources/nosatprofile.png";
import wellies from "../../resources/wellington.png";
import pagetemplate from "../../templates/page/page.template";

export default function Homeview(): JSX.Element {
  let list: templaterow[] = [
    {
      imagepath: profilepic,
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer urna ante, semper ac enim et, ultrices aliquet libero. Nunc id magna elit. Ut varius malesuada urna, commodo consequat ligula posuere viverra. Aliquam lobortis tellus nec ligula eleifend condimentum. Nullam volutpat nisi et sagittis consectetur. Integer fermentum a lorem quis aliquet. In laoreet sed leo et laoreet. Proin lacinia, lectus nec sagittis",
    },
    {
      imagepath: wellies,
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer urna ante, semper ac enim et, ultrices aliquet libero. Nunc id magna elit. Ut varius malesuada urna, commodo consequat ligula posuere viverra. Aliquam lobortis tellus nec ligula eleifend condimentum. Nullam volutpat nisi et sagittis consectetur. Integer fermentum a lorem quis aliquet. In laoreet sed leo et laoreet. Proin lacinia, lectus nec sagittis",
    },
  ];
  return pagetemplate("Peace Legal", list);
}
