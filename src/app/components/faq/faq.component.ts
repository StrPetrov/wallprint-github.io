import { Component, ElementRef, QueryList, Renderer2, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

  faq = [
    { question: 'Wie lange dauert ein Mauerbau?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptates sequi consequuntur distinctio quo explicabo inventore perspiciatis ipsam, assumenda obcaecati, adipisci rem odio! Quidem repellat nihil, libero officiis accusamus id.', id: 'answer1'},
    { question: 'Wie lange dauert ein Mauerbau?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptates sequi consequuntur distinctio quo explicabo inventore perspiciatis ipsam, assumenda obcaecati, adipisci rem odio! Quidem repellat nihil, libero officiis accusamus id.', id: 'answer2'},
    { question: 'Wie lange dauert ein Mauerbau?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptates sequi consequuntur distinctio quo explicabo inventore perspiciatis ipsam, assumenda obcaecati, adipisci rem odio! Quidem repellat nihil, libero officiis accusamus id.', id: 'answer3'},
    { question: 'Wie lange dauert ein Mauerbau?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptates sequi consequuntur distinctio quo explicabo inventore perspiciatis ipsam, assumenda obcaecati, adipisci rem odio! Quidem repellat nihil, libero officiis accusamus id.', id: 'answer4'},
    { question: 'Wie lange dauert ein Mauerbau?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum voluptates sequi consequuntur distinctio quo explicabo inventore perspiciatis ipsam, assumenda obcaecati, adipisci rem odio! Quidem repellat nihil, libero officiis accusamus id.', id: 'answer5'}
  ]

  answerVisibility: { [key: string]: boolean } = {};

  @ViewChildren('answerRef') answerRefs!: QueryList<ElementRef>;
  @ViewChildren('imgRef') imgRefs!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {}

  showHideAnswer = (questionId: string) => {
    this.answerVisibility[questionId] = !this.answerVisibility[questionId];

    const answerElement = this.answerRefs.find((element: any) => {
      return element.nativeElement.getAttribute('data-id') === questionId
    })

    const imgElement = this.imgRefs.find((element: any) => {
      return element.nativeElement.getAttribute('img-id') === questionId
    })
    
    if (this.answerVisibility[questionId]) {
      this.renderer.addClass(answerElement?.nativeElement, 'show-answer');
      this.renderer.addClass(imgElement?.nativeElement, 'rotate-up');
    }
    else {
      this.renderer.removeClass(answerElement?.nativeElement, 'show-answer');
      this.renderer.removeClass(imgElement?.nativeElement, 'rotate-up');
    }
  }
}
