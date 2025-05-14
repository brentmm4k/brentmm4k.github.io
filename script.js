// Function to play the corresponding click sound based on the button clicked
function playClickSound(event) {
  // Prevent the default anchor behavior
  event.preventDefault();

  // Get the audio ID from the data attribute
  const audioId = event.target.getAttribute('data-audio');
  const audio = document.getElementById(audioId);

  // Reset audio to start and play it
  audio.currentTime = 0; // Reset audio to start
  audio.play(); // Plays the audio

  // Get the target URL for navigation
  const targetUrl = event.target.getAttribute('href');

  // Navigate to the new page after the audio has finished playing
  audio.onended = function() {
    window.location.href = targetUrl; // Navigate to the new page
  };
}

// Add event listeners to navbar links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', playClickSound);
});

 // Creates an array of image filenames
const fighterImages = [];
const fighterDescriptions = [
            // Array of descriptions for each fighter
            "#01 Mario - Mario is a well-rounded fighter with balanced stats and a strong grab game, often utilizing down throw to up tilt chains.",
            "#02 Donkey Kong - Donkey Kong is a heavyweight with powerful smash attacks and a notable cargo throw combo game.",
            "#03 Link - Link boasts a versatile projectile arsenal and a powerful remote bomb, offering strong zoning capabilities.",
            "#04 Samus - Samus excels in long-range combat with her charge shot and missiles, complemented by a solid zoning game.",
            "#04ᵋ Dark Samus - Dark Samus shares Samus's moveset with slight aesthetic differences and a unique floatier movement.",
            "#05 Yoshi - Yoshi is agile with excellent aerial mobility, featuring a unique double jump armor and strong combo potential.",
            "#06 Kirby - Kirby is a lightweight character with multiple jumps and the ability to copy opponents' neutral specials.",
            "#07 Fox - Fox is a fast-paced fighter with rapid attacks and a strong up smash, excelling in aggressive playstyles.",
            "#08 Pikachu - Pikachu is a nimble character with quick attacks and a versatile recovery, making it hard to pin down.",
            "#09 Luigi - Luigi has a unique traction and a powerful combo game, often utilizing his down throw into aerials.",
            "#10 Ness - Ness combines strong aerials with potent psychic projectiles, offering a mix of zoning and close combat.",
            "#11 Captain Falcon - Captain Falcon is known for his speed and powerful knee strike, rewarding aggressive and precise play.",
            "#12 Jigglypuff - Jigglypuff is a floaty character with exceptional aerial control and a devastating rest move.",
            "#13 Peach - Peach utilizes float mechanics for intricate aerial combos and has a strong punish game with her turnips.",
            "#13ᵋ Daisy - Daisy mirrors Peach's moveset with minor visual differences, offering the same technical gameplay.",
            "#14 Bowser - Bowser is the heaviest character, boasting immense power and surprisingly quick attacks for his size.",
            "#15 Ice Climbers - The Ice Climbers function as a duo, enabling unique desync combos and extended grab chains.",
            "#16 Sheik - Sheik is a speedster with rapid attacks and excellent mobility, focusing on hit-and-run tactics.",
            "#17 Zelda - Zelda combines powerful magic attacks with a strong zoning game, utilizing her Phantom and lightning kicks.",
            "#18 Dr. Mario - Dr. Mario is a heavier, stronger variant of Mario, trading speed for increased knockback on attacks.",
            "#19 Pichu - Pichu is a lightweight with high-speed attacks that self-damage, offering high risk and high reward.",
            "#20 Falco - Falco has strong aerials and a high jump, excelling in vertical combos and edge-guarding.",
            "#21 Marth - Marth is a swordfighter who rewards spacing with his tipper mechanic, dealing more damage at the blade's tip.",
            "#21ᵋ Lucina - Lucina lacks Marth's tipper mechanic, offering consistent damage across her blade, simplifying spacing.",
            "#22 Young Link - Young Link is a nimble character with a variety of projectiles, enabling a strong zoning playstyle.",
            "#23 Ganondorf - Ganondorf is a powerhouse with slow but devastating attacks, capable of early KOs.",
            "#24 Mewtwo - Mewtwo is a floaty character with strong psychic projectiles and a potent tail-based aerial game.",
            "#25 Roy - Roy is a close-range swordfighter whose attacks deal more damage near the hilt, promoting aggressive play.",
            "#25ᵋ Chrom - Chrom shares Roy's moveset but lacks the hilt mechanic, offering consistent damage throughout his blade.",
            "#26 Mr. Game & Watch - Mr. Game & Watch has a unique 2D moveset with quirky attacks and a powerful judgment hammer.",
            "#27 Meta Knight - Meta Knight is a fast, multi-jump character with rapid attacks and strong edge-guarding capabilities.",
            "#28 Pit - Pit is a balanced fighter with versatile aerials and a controllable arrow projectile.",
            "#28ᵋ Dark Pit - Dark Pit shares Pit's moveset with slight differences in arrow trajectory and a stronger side special.",
            "#29 Zero Suit Samus - Zero Suit Samus is a swift, agile fighter with strong aerials and a versatile flip jump for mobility.",
            "#30 Wario - Wario combines strong aerials with a unique waft mechanic, allowing for explosive KO potential.",
            "#31 Snake - Snake is a tactical fighter with a variety of explosives, excelling in stage control and zoning.",
            "#32 Ike - Ike is a heavy swordfighter with powerful, sweeping attacks that can KO at low percentages.",
            "#33-35 Pokémon Trainer - Squirtle is a nimble water-type fighter with fast attacks and excellent combo potential. Ivysaur uses ranged vine attacks and powerful up air and down air moves for mid-range control. Charizard is a heavyweight with strong flamethrower attacks and great survivability.",
            "#36 Diddy Kong - Diddy Kong is a nimble fighter with strong aerials and a banana peel for tripping opponents.",
            "#37 Lucas - Lucas combines strong zoning with powerful smash attacks and a unique tether recovery.",
            "#38 Sonic - Sonic is the fastest character, focusing on hit-and-run tactics and quick aerials.",
            "#39 King Dedede - King Dedede is a heavyweight with powerful hammer attacks and a unique Gordo projectile.",
            "#40 Olimar - Olimar utilizes Pikmin to extend his attacks, offering a unique playstyle centered around resource management.",
            "#41 Lucario - Lucario's attacks grow stronger as his damage increases, rewarding players who can survive at high percentages.",
            "#42 R.O.B. - R.O.B. is a versatile fighter with strong projectiles and a powerful up-air for juggling opponents.",
            "#43 Toon Link - Toon Link is a nimble swordfighter with a variety of projectiles, excelling in hit-and-run tactics.",
            "#44 Wolf - Wolf is a space animal with strong, disjointed attacks and a powerful blaster for zoning.",
            "#45 Villager - Villager uses a variety of tools from Animal Crossing, offering a unique zoning and trapping playstyle.",
            "#46 Mega Man - Mega Man excels in projectile-based combat, using a variety of weapons to control space.",
            "#47 Wii Fit Trainer - Wii Fit Trainer combines unique stretches and poses to deliver attacks, focusing on deep breathing for buffs.",
            "#48 Rosalina & Luma - Rosalina fights alongside Luma, allowing for complex setups and extended hitboxes.",
            "#49 Little Mac - Little Mac is a ground-based fighter with powerful punches but struggles in aerial combat and recovery.",
            "#50 Greninja - Greninja is a swift, agile fighter with water-based attacks and a strong dash game.",
            "#51-53 Mii Brawler - Mii Brawler is a customizable fighter focusing on close-range combat with various punch and kick options. Mii Swordfighter offers a mix of projectile and melee attacks, customizable to fit different playstyles. Mii Gunner specializes in long-range combat with a variety of projectile options.",
            "#54 Palutena - Palutena combines strong zoning tools with powerful aerials and a versatile teleport recovery.",
            "#55 Pac-Man - Pac-Man uses a variety of classic arcade-inspired projectiles and traps to control the stage.",
            "#56 Robin - Robin is a tactical fighter who uses a mix of magic spells and swordplay, with limited-use tomes for unique attacks.",
            "#57 Shulk - Shulk can switch between Monado Arts, altering his stats to suit different situations in battle.",
            "#58 Bowser Jr. - Bowser Jr. and his Koopalings use a Clown Car with a variety of mechanical attacks and a powerful cannonball.",
            "#59 Duck Hunt - Duck Hunt uses a mix of projectile attacks with a clay pigeon, wild gunmen, and a can that can be kicked around.",
            "#60 Ryu - Ryu is a Street Fighter character with a focus on combo strings, input commands, and powerful Hadokens.",
            "#60ᵋ Ken - Ken is an echo of Ryu, with faster movement, multi-hit attacks, and a fiery Shoryuken.",
            "#61 Cloud - Cloud is a swordfighter with a chargeable Limit Break that powers up his special moves.",
            "#62 Corrin - Corrin is a dragon-human hybrid with a variety of piercing sword attacks and a unique pinning side special.",
            "#63 Bayonetta - Bayonetta is a combo-heavy character with bullet arts and a powerful Witch Time counter.",
            "#64 Inkling - Inkling can use ink-based attacks that increase damage when an opponent is inked.",
            "#65 Ridley - Ridley is a large, powerful fighter with strong aerials and a deadly side special that drags opponents.",
            "#66 Simon - Simon is a long-range whip fighter with a variety of projectiles like holy water, axes, and crosses.",
            "#66ᵋ Richter - Richter is an echo of Simon with slight differences in projectile properties and animations.",
            "#67 King K. Rool - King K. Rool is a heavyweight with powerful armor, a belly counter, and versatile projectiles.",
            "#68 Isabelle - Isabelle uses a mix of tools from Animal Crossing, focusing on traps and projectile setups.",
            "#69 Incineroar - Incineroar is a slow but powerful grappler with a unique revenge counter that boosts his attack power.",
            "#70 Piranha Plant - Piranha Plant uses a variety of quirky attacks, including a long-range spiked ball and poison breath.",
            "#71 Joker - Joker is a fast, agile fighter who can summon his Persona, Arsène, for enhanced abilities.",
            "#72 Hero - Hero is a swordfighter with a command selection for randomized magical abilities.",
            "#73 Banjo & Kazooie - Banjo & Kazooie use a mix of egg projectiles, a strong side special, and versatile aerials.",
            "#74 Terry - Terry is a fighter with a mix of traditional fighting game inputs and a powerful 'Go' mechanic for special moves.",
            "#75 Byleth - Byleth uses a variety of weapons from Fire Emblem, excelling in long-range, high-damage attacks.",
            "#76 Min Min - Min Min is an extendable arm fighter who can switch between different arm weapons for unique attacks.",
            "#77 Steve - Steve is a Minecraft fighter who mines materials to craft stronger weapons and set traps.",
            "#78 Sephiroth - Sephiroth is a swordfighter with incredible range and a winged form that enhances his abilities at high damage.",
            "#79-80 Pyra/Mythra - Pyra is a powerful, slow swordswoman with high knockback attacks and strong kill potential. Mythra is a fast, combo-focused swordfighter who excels at racking up damage quickly.",
            "#81 Kazuya - Kazuya is a Tekken fighter with a focus on traditional fighting game moves, including powerful command inputs.",
            "#82 Sora - Sora is a lightweight, floaty fighter with versatile magic and a strong aerial game, reflecting his Kingdom Hearts origins.",
];

// Populates the fighterImages array with paths to the fighter images
for (let i = 1; i <= 84; i++) {
    const formattedNumber = String(i).padStart(2, '0'); // Format numbers as two digits
    fighterImages.push(`../images/fighters/${formattedNumber}.png`); // Add the image path to the array
}

// Gets the slides container
const slidesContainer = document.getElementById('slides-container');

// Loops through the array and creates image elements with the descriptions
fighterImages.forEach((imageSrc, index) => {
    const slideElement = document.createElement('div');
    slideElement.classList.add('slide'); // Adds class for styling
            
    const imgElement = document.createElement('img');
    imgElement.src = imageSrc; // Sets the image source
    imgElement.alt = 'Fighter Image'; // Adds text for accessibility
   
    const descriptionElement = document.createElement('div');
    // Append the image and description to the slide   
    descriptionElement.classList.add('description'); // Adds class for styling
    descriptionElement.textContent = fighterDescriptions[index]; // Sets the description text
            
    slideElement.appendChild(imgElement); // Append the image to the slide
    slideElement.appendChild(descriptionElement); // Append the description to the slide
    // Append the slide to the slides container
    slidesContainer.appendChild(slideElement); // Append the slide to the slides container
});

// The Slider functionality
let slideIndex = 0; // Tracks the current slide index
// Function to show a specific slide based on the index
function showSlide(index) {
    const totalSlides = document.querySelectorAll('.slide').length; // Gets the total number of slides
    if (index >= totalSlides) {
        slideIndex = 0; // Loops back to the first slide
    } else if (index < 0) {
        slideIndex = totalSlides - 1; // Goes to the last slide
    }
    const offset = -slideIndex * 100; // Calculates the offset for sliding
    slidesContainer.style.transform = `translateX(${offset}%)`; // Apply the offset to the slides
}
// Function to go to the next slide
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}
// Function to go to the previous slide
function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}
// Show the first slide initially
showSlide(slideIndex);