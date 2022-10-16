import pictureOne from "./AboutPictures/260552545_10159687504385751_3819473669622821616_n.jpg";
import pictureTwo from "./AboutPictures/20210521_233823 (2).jpg";

export default function About() {
  return (
    <main>
      <div class="container my-5">
        <div class="row container__about">
          <div class="col">
            <img class="card-img-top" src={pictureOne} alt="The owner of the website" />
            <p>
              Hey my name is Sander, im currently studying frontend at Noroff, been working as a car painter for some years and then as a forklift operator for many years, after a surgical incision in
              my left foot i had to quit the super physical work. i've always had a passion for computers and how they work, so i figured why not make a job out of it. Thats when i decided i wanted to
              learn how to code.
            </p>
          </div>
          <div class="col reverse">
            <p>My interest for computers started early, i build my first pc from scratch at 13y old, and computers software and gaming has been a huge part of me ever since.</p>
            <img class="card-img-top" src={pictureTwo} alt="A computer" />
          </div>
        </div>
      </div>
    </main>
  );
}
