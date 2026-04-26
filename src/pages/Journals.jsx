import './Journals.css'

const journals = [
  {
    id: 1,
    title: 'Lessons from the Mountains',
    date: 'April 15, 2026',
    category: 'Reflection',
    excerpt: 'Standing at 4000 meters, surrounded by silence and stone, I learned that the most profound discoveries often come when we step away from the noise. Mountains teach patience, humility, and the art of presence.',
    content: `Standing at 4000 meters, surrounded by silence and stone, I learned that the most profound discoveries often come when we step away from the noise. Mountains teach patience, humility, and the art of presence.

Every step upward is a meditation. Every breath becomes intentional. The body demands presence—there is no room for distraction when your life depends on focus and rhythm.

What struck me most was not the view from the summit, though it was breathtaking. It was the silence. A silence so complete that it becomes a sound of its own. In that silence, I understood something fundamental: we are not meant to fill every moment with noise and stimulation.

The mountains don't care about your achievements or your failures. They simply exist, indifferent and eternal. There is something liberating about that. When you stand before something so vast and ancient, your problems shrink to their proper size.

I returned to the city changed. Not dramatically, but subtly. I move through crowds with a different awareness. I seek silence more often. I understand that growth requires discomfort, and that the most valuable lessons come from places that challenge us.

The mountains will always be there, waiting. And I will return, again and again, to learn what they have to teach.`
  },
  {
    id: 2,
    title: 'From Streets to Summits',
    date: 'March 28, 2026',
    category: 'Journey',
    excerpt: 'My journey from street photography to mountaineering wasn\'t a departure—it was a continuation. Both are about observation, about seeing the world differently, about documenting what moves us.',
    content: `My journey from street photography to mountaineering wasn't a departure—it was a continuation. Both are about observation, about seeing the world differently, about documenting what moves us.

Street photography taught me to see. To notice the light falling on a face, the gesture that reveals emotion, the moment when a stranger becomes a story. I walked through New Delhi with a camera, collecting moments, understanding that every person is a universe of experience.

Then came the mountains. What began as a weekend trek became an obsession. I realized that the same curiosity that drove me through city streets could take me to higher places. The mountains offered a different kind of observation—not of people, but of landscape, of self, of the relationship between human and nature.

But here's what I discovered: they're not separate. The street photographer and the mountaineer are the same person, asking the same questions. How do we see? What moves us? What stories are hidden in plain sight?

In the city, I documented humanity. On the mountains, I document solitude. Both are essential. Both reveal truth. The transition wasn't a departure from one identity to another—it was an expansion of the same fundamental drive: to observe, to understand, to capture what matters.

Now I move between both worlds. I photograph in cities and on trails. I seek stories in crowds and in silence. And I understand that this duality is not a contradiction—it's a completeness.`
  },
  {
    id: 3,
    title: 'The Art of Slow Travel',
    date: 'March 10, 2026',
    category: 'Travel',
    excerpt: 'In a world obsessed with speed, I discovered that the most meaningful experiences come from slowing down. Walking through valleys, sitting with locals, watching sunsets—these moments define a journey.',
    content: `In a world obsessed with speed, I discovered that the most meaningful experiences come from slowing down. Walking through valleys, sitting with locals, watching sunsets—these moments define a journey.

We live in an age of optimization. We collect experiences like currency, rushing from one destination to another, checking boxes on a list. But this approach misses the essence of travel. It misses the journey itself.

I learned this slowly, through trial and error. I used to rush through places, trying to see everything, capture everything, document everything. But the best moments came when I stopped trying. When I sat by a stream for an hour, watching the water. When I talked to a stranger for hours, learning their story. When I got lost in a small village and discovered a tea shop that became my favorite place.

Slow travel is about presence. It's about allowing a place to reveal itself to you, rather than imposing your agenda on it. It's about walking instead of driving, talking instead of scrolling, observing instead of performing.

The irony is that you see more when you're not trying to see everything. You experience more when you're not rushing to experience it all. The best photographs come when you've been in a place long enough to understand its light, its rhythm, its soul.

I've learned to travel differently now. Fewer destinations, more time in each. Fewer photographs, more moments of presence. Fewer stories to tell, but deeper stories, richer stories, stories that matter.

This is the art of slow travel: to understand that the journey is not a means to an end, but an end in itself.`
  },
  {
    id: 4,
    title: 'Solitude and Connection',
    date: 'February 18, 2026',
    category: 'Reflection',
    excerpt: 'I used to think solitude and connection were opposites. That you had to choose between being alone and being with others. But I\'ve learned that they\'re two sides of the same coin.',
    content: `I used to think solitude and connection were opposites. That you had to choose between being alone and being with others. But I've learned that they're two sides of the same coin.

Solitude is not loneliness. It's a state of being fully present with yourself. On the mountains, in the silence, I find solitude. And in that solitude, I find connection—to the landscape, to myself, to something larger than myself.

But I also find connection in crowds. In the eyes of a stranger in the street. In a conversation with a fellow traveler. In the shared experience of being human.

The paradox is this: the more comfortable I become with solitude, the more deeply I can connect with others. When you're not seeking validation or distraction, when you're at peace with yourself, you can truly see another person. You can listen without agenda. You can be present.

This is what I've learned from both street photography and mountaineering. From both cities and mountains. The journey is about finding balance between these two poles—solitude and connection, observation and participation, being and doing.

I need the mountains to find myself. And I need the city to find others. I need silence to hear my own thoughts. And I need conversation to expand beyond them.

The fullest life is not found in choosing one or the other. It's found in moving fluidly between them, understanding that both are necessary, both are sacred, both are home.`
  }
]

export default function Journals() {
  return (
    <div className="journals">
      <div className="journals-header">
        <h1>Journals & Reflections</h1>
        <p>Thoughts from the trail, observations from the world</p>
      </div>

      <div className="journals-container">
        {journals.map((journal) => (
          <article key={journal.id} className="journal-article">
            <div className="article-meta">
              <span className="article-date">{journal.date}</span>
              <span className="article-category">{journal.category}</span>
            </div>
            <h2 className="article-title">{journal.title}</h2>
            <div className="article-content">
              {journal.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
