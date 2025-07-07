import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../Services/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  imports: [],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  personalityType: string = '';
  resultDescription: string = '';
  resultEmoji: string = '';

  constructor(
    public quizService: QuizService,
    private router: Router 
  ){}

  ngOnInit(): void {
      this.personalityType = this.quizService.getResult();
      this.setResultDetails(this.personalityType);
  }

  setResultDetails(type: string){
    const resultMap: Record < string,{ description: string; emoji: string} >=
{
   Thinker: {
    description: 'You are logical, curious, and love solving problems.',
    emoji: '🧠'
  },
  Creative: {
    description: 'You are imaginative, expressive, and love to innovate.',
    emoji: '🎨'
  },
  Relaxer: {
    description: 'You enjoy peace, calm, and taking life at your pace.',
    emoji: '🛋️'
  },
  Adventurer: {
    description: 'You are bold, energetic, and always exploring.',
    emoji: '🌍'
  },
  Empath: {
    description: 'You deeply understand and care for others.',
    emoji: '💖'
  },
  Leader: {
    description: 'You take charge and inspire others to act.',
    emoji: '👑'
  },
  Cheerful: {
    description: 'You bring joy and positivity wherever you go.',
    emoji: '😄'
  },
  Romantic: {
    description: 'You are affectionate, sensitive, and love love itself.',
    emoji: '❤️'
  },
  Extrovert: {
    description: 'You thrive on social energy and love being around people.',
    emoji: '🎉'
  },
  Introvert: {
    description: 'You enjoy solitude, reflection, and your own company.',
    emoji: '📚'
  },
  Explorer: {
    description: 'You have an insatiable curiosity and a love of new experiences.',
    emoji: '🧭'
  },
  Planner: {
    description: 'You are organized, disciplined, and goal-oriented.',
    emoji: '📅'
  },
  Calm: {
    description: 'You stay composed, serene, and handle stress gracefully.',
    emoji: '🪷'
  },
  Spontaneous: {
    description: 'You embrace the moment and adapt quickly.',
    emoji: '🎲'
  },
  Loyal: {
    description: 'You are dependable, faithful, and value strong bonds.',
    emoji: '🤝'
  },
  Optimist: {
    description: 'You see the bright side in every situation.',
    emoji: '☀️'
  },
  Observer: {
    description: 'You notice details, reflect deeply, and prefer to watch before acting.',
    emoji: '👀'
  },
  Supporter: {
    description: 'You lift others up and provide help when needed.',
    emoji: '🤗'
  },
  Energetic: {
    description: 'You are vibrant, lively, and full of enthusiasm.',
    emoji: '⚡'
  },
  Showstopper: {
    description: 'You are charismatic, bold, and love to shine.',
    emoji: '🌟'
  },
  Artist: {
    description: 'You see beauty in everything and express it creatively.',
    emoji: '🖌️'
  },
  Guide: {
    description: 'You love teaching, mentoring, and helping others grow.',
    emoji: '🧭'
  },
  Connector: {
    description: 'You bring people together and build strong relationships.',
    emoji: '🔗'
  },
  Trailblazer: {
    description: 'You forge your own path and inspire others to follow.',
    emoji: '🔥'
  },
  Minimalist: {
    description: 'You prefer simplicity and value what truly matters.',
    emoji: '🪞'
  },
  FreeSpirit: {
    description: 'You are carefree, open-minded, and live life your own way.',
    emoji: '🦋'
  },
  Achiever: {
    description: 'You set high goals and work hard to reach them.',
    emoji: '🏆'
  },
  Naturalist: {
    description: 'You feel at home in nature and live harmoniously with it.',
    emoji: '🌳'
  },
  Realist: {
    description: 'You see things as they are and make practical choices.',
    emoji: '🪨'
  },
  Curious: {
    description: 'You are inquisitive and always eager to learn.',
    emoji: '🔍'
  },
  Strategist: {
    description: 'You plan carefully and think ahead to win.',
    emoji: '♟️'
  },
  Dreamer: {
    description: 'You have big visions and believe anything is possible.',
    emoji: '💭'
  },
  Blunt: {
    description: 'You speak your mind honestly and directly.',
    emoji: '🗣️'
  },
  Listener: {
    description: 'You hear people out and make them feel understood.',
    emoji: '👂'
  },
  Independent: {
    description: 'You value freedom and like doing things on your own.',
    emoji: '🦅'
  },
  FamilyOriented: {
    description: 'You cherish family bonds and prioritize loved ones.',
    emoji: '👨‍👩‍👧‍👦'
  },
  Classic: {
    description: 'You value tradition and timeless elegance.',
    emoji: '🎩'
  },
  SelfCare: {
    description: 'You know how to take care of yourself and recharge.',
    emoji: '🛀'
  },
  Dependable: {
    description: 'You can always be counted on, no matter what.',
    emoji: '🪢'
  },
  Grounded: {
    description: 'You stay humble and keep both feet on the ground.',
    emoji: '🌱'
  },
  Timeless: {
    description: 'You exude grace and never go out of style.',
    emoji: '⌛'
  },
  Original: {
    description: 'You are unique, authentic, and true to yourself.',
    emoji: '🎭'
  },
  Easygoing: {
    description: 'You go with the flow and take things as they come.',
    emoji: '🌊'
  },
};

const result = resultMap[type];
if (result){
  this.resultDescription = this.resultDescription;
  this.resultEmoji = this.resultEmoji;
} else{
  this.resultDescription = 'You are unique and cannot be defined!';
  this.resultEmoji = '✨'
}
}

restartQuiz(){
  this.quizService.resetQuiz();
  this.router.navigate(['/quiz']);
}
}

