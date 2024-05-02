import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular-w2';


  public index = 0;


  public booksCollection = [
    {
      link:'Под игото',
      author: 'Иван Вазов',
      summary:' Под игото“ е роман в три части от българския писател Иван Вазов, цялостно публикуван за първи път през 1894 г. Определян е като първия пример за този жанр в българската литература. Творбата е най-популярното произведение на автора, както и най-четената и превеждана българска книга',
      rating: 0 
    },
    {
      link:'Майце си', 
      author: 'Христо Ботев',
      summary: 'Авторът му е Христо Ботев, а творбата носи името „Майце си“. Майката е последната опора на лирическия герой, тя е онази която го крепи, онази, която му дава сили и вяра.',
      rating: 0
    },
    {
      link:'Опълченците на Шипка', 
      author: 'Иван Вазов',
      summary: 'Опълченците на Шипка“ е ода на българския писател класик Иван Вазов. Произведението е част от цикъла „Епопея на забравените“, посветена на героите от националноосвободителните борби и Възраждането на България през XVIII и XIX век.',
      rating: 0 
    },
    {
      link:'Две хубави очи', 
      author: 'Пейо Яворов',
      summary: '„Две хубави очи“ е произведение на Пейо Яворов и е част от антологията „Подир сенките на облаците“',
      rating: 0 
    },
    {
      link:'Гераците', 
      author: 'Елин Пелин',
      summary: 'Гераците“ е повест от българския писател Елин Пелин. Проследява разпадането на рода на семейството на богатия чорбаджия Йордан Герака след смъртта на неговата съпруга и душевен център на семейството, баба Марга.',
      rating: 0 
    }
  ];



  public nextBookButton() {

    this.index++;

    if (this.index >= this.booksCollection.length) {
      this.index = 0;
    }

  }
  public rateBook(bookIndex: number, rating: number) {
    this.booksCollection[bookIndex].rating = rating;
  }

}

