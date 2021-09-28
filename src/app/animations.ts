import {
  animate,
  animateChild,
  group,
  query,
  stagger,
  style,
  transition,
  trigger,
} from "@angular/animations";

export const listAnimation = trigger("fadeInTrigger", [
  transition("* <=> *", [
    query(
      ":enter",
      [
        style({ opacity: 0, transform: "translateY(-5rem)" }),
        stagger(
          "0.3s",
          animate(
            "0.8s ease-out",
            style({ opacity: 1, transform: "translateY(0rem)" })
          )
        ),
      ],
      { optional: true }
    ),
    query(":leave", animate("0ms", style({ opacity: 0 })), {
      optional: true,
    }),
  ]),
]);

export const slideInAnimation = trigger("routeAnimations", [
  // The '* => *' will trigger the animation to change between any two states
  transition('* => *', [
    // The query function has three params.
    // First is the event, so this will apply on entering or when the element is added to the DOM.
    // Second is a list of styles or animations to apply.
    // Third we add a config object with optional set to true, this is to signal
    // angular that the animation may not apply as it may or may not be in the DOM.
    query(':enter', [style({ opacity: 0 })], { optional: true }),
    query(
      ':leave',
      // here we apply a style and use the animate function to apply the style over 0.3 seconds
      [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
      { optional: true }
    ),
    query(
      ':enter',
      [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
      { optional: true }
    )
  ])

]);
