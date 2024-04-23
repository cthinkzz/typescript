type EventType = 'scroll' | 'click' | 'mousemove';
type EventType2 = Exclude<EventType, 'scroll'>;

function displayAction(type: EventType2) {
  console.log(type);
}

displayAction('scroll'); // error
