import { Injectable } from '@angular/core';

export interface QuizOption{
  answer:string;
  type:string;
}

export interface QuizQuestion{
  id:number;
  text:string;
  options: QuizOption[];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private originalQuestions: QuizQuestion[] = [
    {
      id:1,
      text:'What’s your ideal weekend?',
      options:[
        { answer: 'Reading books', type: 'Thinker' },
        { answer: 'Hiking', type: 'Adventurer' },
        { answer: 'Netflix & Chill', type: 'Relaxer' },
        { answer: 'Party all night', type: 'Extrovert' }
      ]
    },
    {
      id:2,
      text: 'Pick a color:',
      options: [
        { answer: 'Blue', type: 'Thinker' },
        { answer: 'Red', type: 'Leader' },
        { answer: 'Green', type: 'Peacemaker' },
        { answer: 'Yellow', type: 'Creative' }
      ]
    },
    {
    id: 3,
    text: 'What’s your favorite time of day?',
    options: [
      { answer: 'Early morning', type: 'Planner' },
      { answer: 'Afternoon', type: 'Doer' },
      { answer: 'Evening', type: 'Chiller' },
      { answer: 'Late night', type: 'Dreamer' }
    ]
  },
  {
    id: 4,
    text: 'Your dream vacation is:',
    options: [
      { answer: 'A quiet cabin in the woods', type: 'Introvert' },
      { answer: 'Exploring a new city', type: 'Explorer' },
      { answer: 'Relaxing on a beach', type: 'Relaxer' },
      { answer: 'Adventure sports', type: 'Thrill-Seeker' }
    ]
  },
  {
    id: 5,
    text: 'How do you make decisions?',
    options: [
      { answer: 'Logically', type: 'Thinker' },
      { answer: 'Based on feelings', type: 'Empath' },
      { answer: 'Impulsively', type: 'Spontaneous' },
      { answer: 'By asking others', type: 'Collaborator' }
    ]
  },
  {
    id: 6,
    text: 'At a party, you are most likely to:',
    options: [
      { answer: 'Talk to everyone', type: 'Social Butterfly' },
      { answer: 'Find a quiet corner', type: 'Observer' },
      { answer: 'Dance!', type: 'Energetic' },
      { answer: 'Leave early', type: 'Minimalist' }
    ]
  },
  {
    id: 7,
    text: 'Your favorite type of movie:',
    options: [
      { answer: 'Romantic', type: 'Romantic' },
      { answer: 'Action', type: 'Adventurer' },
      { answer: 'Documentary', type: 'Thinker' },
      { answer: 'Comedy', type: 'Cheerful' }
    ]
  },
  {
    id: 8,
    text: 'Pick a pet:',
    options: [
      { answer: 'Dog', type: 'Loyal' },
      { answer: 'Cat', type: 'Independent' },
      { answer: 'Parrot', type: 'Talkative' },
      { answer: 'Fish', type: 'Calm' }
    ]
  },
  {
    id: 9,
    text: 'Your favorite season:',
    options: [
      { answer: 'Spring', type: 'Optimist' },
      { answer: 'Summer', type: 'Energetic' },
      { answer: 'Autumn', type: 'Reflective' },
      { answer: 'Winter', type: 'Cozy' }
    ]
  },
  {
    id: 10,
    text: 'When working in a team, you:',
    options: [
      { answer: 'Lead', type: 'Leader' },
      { answer: 'Support', type: 'Supporter' },
      { answer: 'Innovate', type: 'Creative' },
      { answer: 'Observe quietly', type: 'Analyst' }
    ]
  },
  {
    id: 11,
    text: 'What’s your go-to comfort food?',
    options: [
      { answer: 'Pizza', type: 'Fun-Lover' },
      { answer: 'Soup', type: 'Warm-Hearted' },
      { answer: 'Chocolate', type: 'Sweet' },
      { answer: 'Salad', type: 'Health-Conscious' }
    ]
  },
  {
    id: 12,
    text: 'What’s your superpower?',
    options: [
      { answer: 'Empathy', type: 'Empath' },
      { answer: 'Logic', type: 'Thinker' },
      { answer: 'Creativity', type: 'Artist' },
      { answer: 'Energy', type: 'Doer' }
    ]
  },
  {
    id: 13,
    text: 'How do you handle stress?',
    options: [
      { answer: 'Meditate', type: 'Calm' },
      { answer: 'Exercise', type: 'Active' },
      { answer: 'Talk it out', type: 'Connector' },
      { answer: 'Ignore it', type: 'Avoidant' }
    ]
  },
  {
    id: 14,
    text: 'Pick a color:',
    options: [
      { answer: 'Blue', type: 'Peaceful' },
      { answer: 'Red', type: 'Passionate' },
      { answer: 'Green', type: 'Balanced' },
      { answer: 'Yellow', type: 'Optimist' }
    ]
  },
  {
    id: 15,
    text: 'Your workspace is:',
    options: [
      { answer: 'Organized', type: 'Planner' },
      { answer: 'Creative mess', type: 'Artist' },
      { answer: 'Minimal', type: 'Minimalist' },
      { answer: 'Ever-changing', type: 'Spontaneous' }
    ]
  },
  {
    id: 16,
    text: 'What do you value most in friends?',
    options: [
      { answer: 'Loyalty', type: 'Loyal' },
      { answer: 'Fun', type: 'Cheerful' },
      { answer: 'Support', type: 'Empath' },
      { answer: 'Honesty', type: 'Truth-Seeker' }
    ]
  },
  {
    id: 17,
    text: 'Pick a hobby:',
    options: [
      { answer: 'Cooking', type: 'Nurturer' },
      { answer: 'Traveling', type: 'Explorer' },
      { answer: 'Painting', type: 'Creative' },
      { answer: 'Gaming', type: 'Strategist' }
    ]
  },
  {
    id: 18,
    text: 'What’s your biggest fear?',
    options: [
      { answer: 'Failure', type: 'Achiever' },
      { answer: 'Loneliness', type: 'Connector' },
      { answer: 'Change', type: 'Traditionalist' },
      { answer: 'Boredom', type: 'Adventurer' }
    ]
  },
  {
    id: 19,
    text: 'Your ideal work environment:',
    options: [
      { answer: 'Quiet office', type: 'Focused' },
      { answer: 'Lively coworking', type: 'Social' },
      { answer: 'Remote at home', type: 'Independent' },
      { answer: 'Outdoors', type: 'Free Spirit' }
    ]
  },
  {
    id: 20,
    text: 'Your favorite drink:',
    options: [
      { answer: 'Coffee', type: 'Go-Getter' },
      { answer: 'Tea', type: 'Calm' },
      { answer: 'Juice', type: 'Natural' },
      { answer: 'Soda', type: 'Fun-Lover' }
    ]
  },
  {
    id: 21,
    text: 'Your dream job:',
    options: [
      { answer: 'CEO', type: 'Leader' },
      { answer: 'Artist', type: 'Creative' },
      { answer: 'Teacher', type: 'Guide' },
      { answer: 'Traveler', type: 'Explorer' }
    ]
  },
  {
    id: 22,
    text: 'What’s your communication style?',
    options: [
      { answer: 'Direct', type: 'Blunt' },
      { answer: 'Empathetic', type: 'Listener' },
      { answer: 'Humorous', type: 'Cheerful' },
      { answer: 'Reserved', type: 'Quiet' }
    ]
  },
  {
    id: 23,
    text: 'Your favorite genre of music:',
    options: [
      { answer: 'Rock', type: 'Rebel' },
      { answer: 'Pop', type: 'Trendy' },
      { answer: 'Classical', type: 'Refined' },
      { answer: 'Jazz', type: 'Free Spirit' }
    ]
  },
  {
    id: 24,
    text: 'When faced with a problem, you:',
    options: [
      { answer: 'Analyze it', type: 'Thinker' },
      { answer: 'Trust your gut', type: 'Intuitive' },
      { answer: 'Ask for help', type: 'Collaborator' },
      { answer: 'Ignore it', type: 'Avoidant' }
    ]
  },
  {
    id: 25,
    text: 'Your favorite sport:',
    options: [
      { answer: 'Football', type: 'Team Player' },
      { answer: 'Tennis', type: 'Independent' },
      { answer: 'Yoga', type: 'Balanced' },
      { answer: 'Adventure sports', type: 'Thrill-Seeker' }
    ]
  },
  {
    id: 26,
    text: 'What’s your favorite way to relax?',
    options: [
      { answer: 'Reading', type: 'Thinker' },
      { answer: 'Meditation', type: 'Calm' },
      { answer: 'Watching movies', type: 'Chill' },
      { answer: 'Going out with friends', type: 'Social' }
    ]
  },
  {
    id: 27,
    text: 'What kind of books do you prefer?',
    options: [
      { answer: 'Fiction', type: 'Dreamer' },
      { answer: 'Non-fiction', type: 'Realist' },
      { answer: 'Mystery', type: 'Curious' },
      { answer: 'Poetry', type: 'Romantic' }
    ]
  },
  {
    id: 28,
    text: 'If you could live anywhere, it would be:',
    options: [
      { answer: 'A bustling city', type: 'Urbanite' },
      { answer: 'A quiet village', type: 'Peaceful' },
      { answer: 'On the beach', type: 'Relaxer' },
      { answer: 'In the mountains', type: 'Adventurer' }
    ]
  },
  {
    id: 29,
    text: 'Your biggest strength is:',
    options: [
      { answer: 'Creativity', type: 'Artist' },
      { answer: 'Patience', type: 'Calm' },
      { answer: 'Leadership', type: 'Leader' },
      { answer: 'Empathy', type: 'Empath' }
    ]
  },
  {
    id: 30,
    text: 'What inspires you?',
    options: [
      { answer: 'Nature', type: 'Naturalist' },
      { answer: 'People', type: 'Connector' },
      { answer: 'Art', type: 'Creative' },
      { answer: 'Challenges', type: 'Achiever' }
    ]
  },
  {
    id: 31,
    text: 'How do you usually spend holidays?',
    options: [
      { answer: 'Traveling', type: 'Explorer' },
      { answer: 'Staying at home', type: 'Homebody' },
      { answer: 'Visiting family', type: 'Nurturer' },
      { answer: 'Trying something new', type: 'Adventurer' }
    ]
  },
  {
    id: 32,
    text: 'Choose a dessert:',
    options: [
      { answer: 'Cake', type: 'Sweet' },
      { answer: 'Ice cream', type: 'Fun-Lover' },
      { answer: 'Fruit', type: 'Healthy' },
      { answer: 'Cookies', type: 'Cheerful' }
    ]
  },
  {
    id: 33,
    text: 'What’s your favorite weather?',
    options: [
      { answer: 'Sunny', type: 'Optimist' },
      { answer: 'Rainy', type: 'Romantic' },
      { answer: 'Snowy', type: 'Cozy' },
      { answer: 'Windy', type: 'Free Spirit' }
    ]
  },
  {
    id: 34,
    text: 'Pick a mode of transport:',
    options: [
      { answer: 'Car', type: 'Independent' },
      { answer: 'Bike', type: 'Adventurer' },
      { answer: 'Train', type: 'Observer' },
      { answer: 'Plane', type: 'Explorer' }
    ]
  },
  {
    id: 35,
    text: 'Your morning routine is:',
    options: [
      { answer: 'Planned and structured', type: 'Organized' },
      { answer: 'Chaotic', type: 'Spontaneous' },
      { answer: 'Slow and relaxed', type: 'Calm' },
      { answer: 'Nonexistent', type: 'Free Spirit' }
    ]
  },
  {
    id: 36,
    text: 'What do you value most?',
    options: [
      { answer: 'Freedom', type: 'Independent' },
      { answer: 'Security', type: 'Grounded' },
      { answer: 'Love', type: 'Romantic' },
      { answer: 'Knowledge', type: 'Thinker' }
    ]
  },
  {
    id: 37,
    text: 'Pick an animal that represents you:',
    options: [
      { answer: 'Lion', type: 'Leader' },
      { answer: 'Dolphin', type: 'Friendly' },
      { answer: 'Owl', type: 'Wise' },
      { answer: 'Butterfly', type: 'Free Spirit' }
    ]
  },
  {
    id: 38,
    text: 'Your favorite type of event:',
    options: [
      { answer: 'Concert', type: 'Social' },
      { answer: 'Workshop', type: 'Learner' },
      { answer: 'Retreat', type: 'Calm' },
      { answer: 'Festival', type: 'Energetic' }
    ]
  },
  {
    id: 39,
    text: 'What’s your favorite holiday?',
    options: [
      { answer: 'Christmas', type: 'Family-Oriented' },
      { answer: 'New Year', type: 'Dreamer' },
      { answer: 'Halloween', type: 'Creative' },
      { answer: 'Easter', type: 'Optimist' }
    ]
  },
  {
    id: 40,
    text: 'Your dream house is:',
    options: [
      { answer: 'Modern apartment', type: 'Urbanite' },
      { answer: 'Rustic cottage', type: 'Naturalist' },
      { answer: 'Beach house', type: 'Relaxer' },
      { answer: 'Treehouse', type: 'Adventurer' }
    ]
  },
  {
    id: 41,
    text: 'You feel happiest when:',
    options: [
      { answer: 'Creating something', type: 'Artist' },
      { answer: 'Helping someone', type: 'Empath' },
      { answer: 'Exploring', type: 'Explorer' },
      { answer: 'Relaxing', type: 'Relaxer' }
    ]
  },
  {
    id: 42,
    text: 'Pick a flower:',
    options: [
      { answer: 'Rose', type: 'Romantic' },
      { answer: 'Sunflower', type: 'Cheerful' },
      { answer: 'Lily', type: 'Peaceful' },
      { answer: 'Orchid', type: 'Elegant' }
    ]
  },
  {
    id: 43,
    text: 'What’s your ideal date?',
    options: [
      { answer: 'Dinner & movie', type: 'Classic' },
      { answer: 'Picnic outdoors', type: 'Nature Lover' },
      { answer: 'Adventure activity', type: 'Thrill-Seeker' },
      { answer: 'Museum visit', type: 'Thinker' }
    ]
  },
  {
    id: 44,
    text: 'How do you celebrate success?',
    options: [
      { answer: 'Throw a party', type: 'Extrovert' },
      { answer: 'Quiet reflection', type: 'Introvert' },
      { answer: 'Treat yourself', type: 'Self-Care' },
      { answer: 'Plan next goal', type: 'Achiever' }
    ]
  },
  {
    id: 45,
    text: 'Your favorite thing about yourself:',
    options: [
      { answer: 'Kindness', type: 'Empath' },
      { answer: 'Determination', type: 'Achiever' },
      { answer: 'Creativity', type: 'Artist' },
      { answer: 'Humor', type: 'Cheerful' }
    ]
  },
  {
    id: 46,
    text: 'What’s your style?',
    options: [
      { answer: 'Trendy', type: 'Chic' },
      { answer: 'Comfortable', type: 'Relaxed' },
      { answer: 'Classic', type: 'Timeless' },
      { answer: 'Unique', type: 'Original' }
    ]
  },
  {
    id: 47,
    text: 'What’s your favorite fruit?',
    options: [
      { answer: 'Apple', type: 'Grounded' },
      { answer: 'Banana', type: 'Easygoing' },
      { answer: 'Strawberry', type: 'Romantic' },
      { answer: 'Mango', type: 'Fun-Lover' }
    ]
  },
  {
    id: 48,
    text: 'Your favorite subject in school:',
    options: [
      { answer: 'Math', type: 'Thinker' },
      { answer: 'Literature', type: 'Creative' },
      { answer: 'Science', type: 'Curious' },
      { answer: 'History', type: 'Wise' }
    ]
  },
  {
    id: 49,
    text: 'You are known for being:',
    options: [
      { answer: 'Reliable', type: 'Dependable' },
      { answer: 'Funny', type: 'Cheerful' },
      { answer: 'Smart', type: 'Thinker' },
      { answer: 'Adventurous', type: 'Explorer' }
    ]
  },
  {
    id: 50,
    text: 'What’s your life motto?',
    options: [
      { answer: 'Live and let live', type: 'Chill' },
      { answer: 'Go big or go home', type: 'Achiever' },
      { answer: 'One step at a time', type: 'Calm' },
      { answer: 'Make your own path', type: 'Trailblazer' }
    ]
  }

  ];


  private suffledQuestions: QuizQuestion[] = [];
  private currentQuestionIndex = 0;
  private answers: string[] = [];

  constructor(){
    this.resetQuiz();
  }


  private shuffleArray(array: any[]){
    const copiedArray = [...array];
    for (let i = copiedArray.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [copiedArray[i], copiedArray[j]] = [copiedArray[j], copiedArray[i]];
   }
   return copiedArray;
  }
  




}
