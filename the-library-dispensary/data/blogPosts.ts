export interface Author {
  name: string;
  title: string;
  avatar?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  tags: string[];
  author: Author;
  publishDate: string;
  readingTime: number; // in minutes
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'understanding-cannabis-terpenes-guide',
    title: 'Understanding Cannabis Terpenes: A Complete Guide to Flavor and Effects',
    excerpt: 'Dive deep into the aromatic world of cannabis terpenes. Learn how these compounds influence flavor, aroma, and the overall effects of your cannabis experience.',
    content: `
# Understanding Cannabis Terpenes: A Complete Guide to Flavor and Effects

When you open a jar of premium cannabis and breathe in that distinctive aroma, you're experiencing the magic of terpenes. These aromatic compounds are the unsung heroes of the cannabis world, responsible for the diverse flavors, scents, and even some of the effects we associate with different strains.

## What Are Terpenes?

Terpenes are organic compounds found in many plants, not just cannabis. They're what give pine trees their fresh scent, lavender its calming aroma, and lemons their citrusy zing. In cannabis, terpenes work alongside cannabinoids like THC and CBD to create what's known as the "entourage effect."

### The Science Behind Terpenes

At a molecular level, terpenes are hydrocarbons built from isoprene units. But don't let the chemistry intimidate you – what matters is understanding how they affect your experience. Research suggests that terpenes can:

- **Modulate cannabinoid effects**: They may enhance or temper the psychoactive effects of THC
- **Provide therapeutic benefits**: Many terpenes have anti-inflammatory, anti-anxiety, or pain-relieving properties
- **Influence mood**: Different terpene profiles can promote relaxation, focus, or energy

## Common Cannabis Terpenes

### Myrcene
**Aroma**: Earthy, musky, with hints of cloves
**Effects**: Sedating, relaxing, may enhance THC absorption
**Also found in**: Mangoes, hops, thyme

Myrcene is often the most abundant terpene in cannabis. Strains high in myrcene tend to produce that classic "couch-lock" effect, making them ideal for evening use or pain relief.

### Limonene
**Aroma**: Citrusy, lemony, fresh
**Effects**: Uplifting, stress-relieving, mood-enhancing
**Also found in**: Citrus fruits, rosemary, peppermint

If you're looking for a strain to brighten your day, limonene-rich options might be your best bet. This terpene is known for its potential anti-anxiety and antidepressant properties.

### Pinene
**Aroma**: Pine, fresh, sharp
**Effects**: Alertness, memory retention, bronchodilator
**Also found in**: Pine trees, basil, parsley

Pinene may help counteract some of the memory impairment associated with THC, making it a favorite among those who want to stay sharp while medicating.

### Linalool
**Aroma**: Floral, lavender, slightly spicy
**Effects**: Calming, anti-anxiety, sedating
**Also found in**: Lavender, coriander, cinnamon

Linalool is your go-to terpene for relaxation without heavy sedation. It's been studied for its potential anti-epileptic and analgesic properties.

### Caryophyllene
**Aroma**: Spicy, peppery, woody
**Effects**: Anti-inflammatory, pain relief, stress reduction
**Also found in**: Black pepper, cloves, cinnamon

Unique among terpenes, caryophyllene can bind to CB2 receptors in our endocannabinoid system, potentially offering therapeutic benefits without psychoactive effects.

## How to Choose Based on Terpenes

When visiting The Library, don't just ask about THC percentages. Consider these terpene-based selection strategies:

### For Daytime Use
Look for strains high in:
- **Limonene**: For mood enhancement and energy
- **Pinene**: For focus and alertness
- **Terpinolene**: For uplifting, creative effects

### For Evening Relaxation
Seek out strains with:
- **Myrcene**: For deep relaxation
- **Linalool**: For calm without heavy sedation
- **Humulene**: For appetite suppression and relaxation

### For Pain Management
Consider terpene profiles featuring:
- **Caryophyllene**: Anti-inflammatory properties
- **Myrcene**: Enhanced pain relief
- **Linalool**: Additional analgesic effects

## The Entourage Effect

The entourage effect is the synergistic interaction between cannabinoids, terpenes, and other cannabis compounds. This phenomenon suggests that the whole plant's chemical profile works better together than isolated compounds alone.

### Real-World Example
Consider two strains with identical THC content but different terpene profiles:
- **Strain A** (high in myrcene): Likely to produce heavy body effects, sedation
- **Strain B** (high in limonene): More likely to create an energetic, uplifting experience

This is why experienced cannabis consumers often prioritize terpene profiles over THC percentages alone.

## Preserving Terpenes

To maintain the terpene profile of your cannabis:

1. **Store properly**: Use airtight containers away from light and heat
2. **Temperature matters**: Keep storage cool but not freezing
3. **Humidity control**: Aim for 55-62% relative humidity
4. **Gentle handling**: Avoid excessive grinding until ready to use
5. **Vaporize at lower temperatures**: Different terpenes vaporize at different temperatures (310-400°F range)

## Terpenes and Consumption Methods

Different consumption methods can affect your terpene experience:

### Smoking
- **Pros**: Full spectrum of compounds activated
- **Cons**: High combustion temperatures can destroy delicate terpenes

### Vaporizing
- **Pros**: Preserves more terpenes, customizable temperature
- **Cons**: Requires quality equipment

### Edibles
- **Pros**: Long-lasting effects
- **Cons**: Most terpenes lost in processing

### Tinctures
- **Pros**: Can preserve terpene profiles well
- **Cons**: Effects differ from inhalation

## Ask Your Budtender

At The Library, our knowledgeable staff can help you navigate terpene profiles. Don't hesitate to:
- Ask about the dominant terpenes in different strains
- Request to smell products (terpenes create the aroma)
- Discuss your desired effects and experiences
- Keep notes on which terpene profiles work best for you

## Conclusion

Understanding terpenes transforms cannabis from a one-dimensional experience focused solely on THC content to a rich, nuanced journey of flavors, aromas, and effects. By paying attention to terpene profiles, you can better predict and customize your cannabis experience.

Next time you visit The Library, take a moment to appreciate the complex bouquet of your chosen strain. Those aromatic compounds aren't just providing flavor – they're an integral part of your cannabis journey.

*Remember: Everyone's endocannabinoid system is unique. What works for one person may not work for another. Start low, go slow, and pay attention to how different terpene profiles affect you personally.*
    `,
    featuredImage: '/images/blog/terpenes-guide.jpg',
    category: 'Education',
    tags: ['terpenes', 'cannabis science', 'strain selection', 'effects', 'education'],
    author: {
      name: 'Dr. Sarah Mitchell',
      title: 'Cannabis Education Specialist',
      avatar: '/images/authors/sarah.jpg'
    },
    publishDate: '2025-01-20',
    readingTime: 8,
    featured: true
  },
  {
    id: '2',
    slug: 'microdosing-cannabis-beginners-guide',
    title: 'Microdosing Cannabis: The Beginner\'s Guide to Less is More',
    excerpt: 'Discover the art of microdosing cannabis for subtle, functional effects. Learn dosing strategies, benefits, and how to find your perfect minimal effective dose.',
    content: `
# Microdosing Cannabis: The Beginner's Guide to Less is More

In a world where cannabis potency continues to climb, a growing number of consumers are discovering that sometimes less truly is more. Microdosing – the practice of consuming minimal amounts of cannabis to achieve subtle, functional effects – is revolutionizing how people integrate cannabis into their daily lives.

## What is Microdosing?

Microdosing involves taking sub-perceptual or barely perceptual doses of cannabis. The goal isn't to get "high" but rather to experience therapeutic benefits while maintaining full functionality. Think of it as finding the minimum effective dose for your desired outcome.

### The Microdosing Philosophy

Traditional cannabis consumption often follows a "more is better" approach. Microdosing flips this script, focusing on:
- **Functionality over intoxication**
- **Subtle enhancement rather than alteration**
- **Consistent, predictable effects**
- **Minimal side effects**

## Benefits of Microdosing

### Enhanced Daily Function
Many microdosers report:
- Improved focus and creativity
- Reduced anxiety without sedation
- Better mood regulation
- Enhanced physical comfort
- Increased productivity

### Medical Applications
Research and anecdotal evidence suggest microdosing may help with:
- Chronic pain management
- Inflammatory conditions
- Anxiety and depression
- PTSD symptoms
- Digestive issues
- Sleep regulation

### Minimal Side Effects
By staying below the psychoactive threshold, microdosers typically avoid:
- Cognitive impairment
- Red eyes
- Dry mouth
- Increased heart rate
- Paranoia or anxiety
- "Couch lock"

## Finding Your Sweet Spot

### Start Low, Go Slow
The golden rule of microdosing is to start with the smallest possible dose and gradually increase until you find your minimum effective dose (MED).

**Suggested Starting Points:**
- **THC**: 1-2.5mg
- **CBD**: 5-10mg
- **Ratio products**: 1:1 THC:CBD starting at 2.5mg each

### The Titration Process

1. **Day 1-3**: Start with your baseline dose
2. **Day 4-6**: Assess effects, maintain dose if effective
3. **Day 7+**: If needed, increase by 0.5-1mg increments
4. **Record everything**: Keep a journal of doses, timing, and effects

### Signs You've Found Your MED
- Subtle positive effects without impairment
- Consistent results with the same dose
- No building tolerance over time
- Ability to function normally or better

## Microdosing Methods

### Inhalation (Vaping/Smoking)
**Pros:**
- Fast onset (5-10 minutes)
- Easy to control dose
- Quick adjustment possible

**Cons:**
- Shorter duration (1-3 hours)
- Harder to measure exact doses
- Not discreet

**Microdosing Technique:**
- Take one small puff
- Wait 10-15 minutes
- Assess before taking more

### Edibles and Capsules
**Pros:**
- Precise dosing
- Long-lasting (4-6 hours)
- Discreet
- Consistent effects

**Cons:**
- Slow onset (30-120 minutes)
- Harder to adjust dose quickly
- Metabolism affects absorption

**Best Practices:**
- Use products with clear labeling
- Consider nano-enhanced products for faster onset
- Take with a small fatty snack for better absorption

### Tinctures and Oils
**Pros:**
- Precise measurement
- Flexible dosing
- Relatively fast onset (15-45 minutes)
- Can be added to food/drinks

**Cons:**
- Taste can be off-putting
- Requires carrying bottle

**Application Methods:**
- Sublingual (under tongue) for faster effect
- Mixed with beverage for gradual onset

### Topicals
**Pros:**
- No psychoactive effects
- Targeted relief
- No dosing concerns

**Cons:**
- Limited to localized effects
- Not suitable for systemic issues

## Creating a Microdosing Schedule

### The Fadiman Protocol
Named after psychedelic researcher James Fadiman:
- **Day 1**: Microdose
- **Day 2**: No dose (observation)
- **Day 3**: No dose (reset)
- **Day 4**: Repeat cycle

### Daily Microdosing
Some prefer consistent daily dosing:
- **Morning**: 1-2.5mg THC for focus
- **Afternoon**: CBD for sustained calm
- **Evening**: Balanced ratio for relaxation

### Situational Microdosing
Using cannabis only when needed:
- Before stressful meetings
- For creative projects
- During physical activity
- For social anxiety

## Product Selection for Microdosing

### Ideal Products at The Library

**For Beginners:**
- Low-dose edibles (1-2.5mg pieces)
- Ratio tinctures (1:1, 2:1, 4:1 CBD:THC)
- CBD-dominant flower
- Measured-dose vape pens

**For Experienced Microdosers:**
- Nano-enhanced products
- Water-soluble powders
- Precision-dosed capsules
- Strain-specific tinctures

### What to Look For
- Clear labeling with exact dosages
- Lab-tested products
- Consistent, reliable brands
- Options for CBD, THC, and ratio products

## Common Mistakes to Avoid

### Taking Too Much Too Soon
Remember: you can always take more, but you can't take less once consumed.

### Inconsistent Timing
Try to dose at the same time daily for predictable effects.

### Ignoring Set and Setting
Your environment and mindset affect your experience, even with microdoses.

### Not Tracking Your Experience
Keep a journal to identify patterns and optimize your protocol.

### Mixing with Other Substances
Be cautious about combining cannabis with alcohol, caffeine, or medications.

## Microdosing for Specific Goals

### For Creativity and Focus
- **Dose**: 1-2mg THC
- **Best strains**: Sativa-dominant with limonene
- **Timing**: Morning or early afternoon

### For Anxiety Relief
- **Dose**: 5-10mg CBD with 1mg THC
- **Best products**: Ratio tinctures or capsules
- **Timing**: As needed or preventatively

### For Physical Recovery
- **Dose**: 2.5mg THC with 10mg CBD
- **Best products**: Topicals plus systemic dose
- **Timing**: Post-workout or evening

### For Social Enhancement
- **Dose**: 1-2.5mg THC
- **Best products**: Fast-acting tinctures
- **Timing**: 30-45 minutes before social events

## The Science Behind Microdosing

### Biphasic Effects
Cannabis exhibits biphasic effects – low doses and high doses can produce opposite results:
- Low doses may reduce anxiety; high doses may increase it
- Small amounts might energize; large amounts sedate

### Endocannabinoid System Optimization
Microdosing may help optimize your endocannabinoid system without overwhelming it, potentially:
- Restoring balance (homeostasis)
- Enhancing natural endocannabinoid production
- Preventing tolerance buildup

## Building Your Microdosing Toolkit

### Essential Supplies
- Journal or tracking app
- Precise scale (for flower)
- Pill cutter (for edibles)
- Timer or reminder app
- Variety of low-dose products

### Creating the Right Environment
- Comfortable, familiar space for initial experiments
- Calm, stress-free schedule
- Support person aware of your practice
- Easy activities planned

## FAQs About Microdosing

**Q: Will I fail a drug test?**
A: Even small amounts of THC can potentially trigger a positive test. Consider CBD-only options if testing is a concern.

**Q: How long until I see benefits?**
A: Some effects are immediate, while others (like anti-inflammatory benefits) may take days or weeks of consistent use.

**Q: Can I build tolerance to microdoses?**
A: Tolerance is less likely with true microdoses, but taking regular breaks can help maintain sensitivity.

**Q: Is microdosing legal?**
A: Legality depends on your location and whether you're using THC or CBD products. Always follow local laws.

## Your Microdosing Journey

Starting a microdosing practice is a personal journey of discovery. What works for your friend may not work for you, and that's perfectly normal. The key is patience, consistency, and careful observation.

Visit The Library to discuss microdosing options with our knowledgeable staff. We can help you select appropriate products and develop a protocol tailored to your goals and lifestyle.

*Remember: This information is for educational purposes. Always consult with a healthcare provider before starting any new wellness regimen, especially if you have existing health conditions or take medications.*
    `,
    featuredImage: '/images/blog/microdosing-guide.jpg',
    category: 'Wellness',
    tags: ['microdosing', 'beginners', 'wellness', 'dosing', 'CBD', 'THC'],
    author: {
      name: 'Marcus Thompson',
      title: 'Wellness Consultant',
      avatar: '/images/authors/marcus.jpg'
    },
    publishDate: '2025-01-18',
    readingTime: 10,
    featured: true
  },
  {
    id: '3',
    slug: 'cannabis-and-sleep-complete-guide',
    title: 'Cannabis and Sleep: Your Complete Guide to Better Rest',
    excerpt: 'Explore how cannabis can improve your sleep quality. Learn about the best strains, timing, and methods for using cannabis as a natural sleep aid.',
    content: `
# Cannabis and Sleep: Your Complete Guide to Better Rest

For millions of Americans struggling with sleep issues, cannabis is emerging as a promising natural alternative to traditional sleep medications. Whether you're dealing with insomnia, restless nights, or simply want to improve your sleep quality, understanding how cannabis affects sleep can help you make informed decisions about incorporating it into your nighttime routine.

## The Science of Cannabis and Sleep

### How Cannabis Affects Sleep Cycles

Cannabis interacts with your endocannabinoid system, which plays a crucial role in regulating sleep-wake cycles. The primary cannabinoids affect sleep in different ways:

**THC (Tetrahydrocannabinol):**
- Decreases sleep onset latency (helps you fall asleep faster)
- Increases deep sleep (Stage 3 NREM)
- May suppress REM sleep at higher doses
- Can cause grogginess if dose is too high

**CBD (Cannabidiol):**
- Promotes wakefulness at low doses
- Sedating at higher doses
- May improve sleep quality
- Reduces anxiety that interferes with sleep

**CBN (Cannabinol):**
- Known as the "sleepy cannabinoid"
- Created when THC ages and oxidizes
- Potentially more sedating than THC
- Often found in older cannabis

### The Sleep Stages and Cannabis

Understanding how cannabis affects each sleep stage helps optimize its use:

1. **Stage 1 (Light Sleep)**: Cannabis can shorten this transition phase
2. **Stage 2 (Light Sleep)**: Generally unaffected by cannabis use
3. **Stage 3 (Deep Sleep)**: THC can increase time in this restorative phase
4. **REM Sleep**: High THC doses may suppress, affecting dreams

## Common Sleep Issues Cannabis May Address

### Insomnia
Cannabis can help with:
- **Sleep onset insomnia**: Difficulty falling asleep
- **Sleep maintenance insomnia**: Frequent awakening
- **Early morning awakening**: Waking too early

### Sleep Disorders
Potential benefits for:
- **Sleep apnea**: May improve breathing (more research needed)
- **REM sleep behavior disorder**: THC's REM suppression may help
- **Restless leg syndrome**: Muscle relaxation properties
- **PTSD-related nightmares**: REM suppression reduces nightmares

### Pain-Related Sleep Issues
Cannabis addresses:
- Chronic pain keeping you awake
- Inflammation causing discomfort
- Muscle tension and spasms
- Arthritis and joint pain

## Choosing the Right Cannabis for Sleep

### Indica vs. Sativa: The Traditional View

While the indica/sativa distinction is becoming less relevant scientifically, many users still find these general guidelines helpful:

**Indica-Dominant Strains:**
- Body-heavy effects
- Sedating and relaxing
- Popular for nighttime use

**Sativa-Dominant Strains:**
- Cerebral, energizing effects
- Generally avoided for sleep
- May increase anxiety in some

**Hybrids:**
- Balanced effects
- Can be tailored for evening use
- Often ideal for sleep issues with anxiety

### Terpenes for Sleep

Terpenes may be more important than indica/sativa labels:

**Myrcene:**
- Sedating, muscle-relaxing
- Found in: Granddaddy Purple, OG Kush

**Linalool:**
- Calming, anxiety-reducing
- Found in: LA Confidential, Lavender

**Terpinolene:**
- Sedating in combination with THC
- Found in: Jack Herer (surprisingly)

**Caryophyllene:**
- Anti-inflammatory, pain-relieving
- Found in: GSC, Bubba Kush

### Recommended Ratios

**High THC (20%+):**
- Fast sleep onset
- Deep sleep increase
- Risk of grogginess

**Balanced THC:CBD (1:1):**
- Gentler effects
- Less psychoactive
- Good for beginners

**High CBD, Low THC (4:1 or higher):**
- Minimal psychoactive effects
- Anxiety reduction
- Subtle relaxation

**CBN-Rich Products:**
- Specifically formulated for sleep
- Often combined with THC/CBD
- Increasingly available in dispensaries

## Timing Your Cannabis Use for Sleep

### The Onset Timeline

Different consumption methods have different timelines:

**Inhalation (Smoking/Vaping):**
- Onset: 5-15 minutes
- Peak: 30-60 minutes
- Duration: 2-4 hours
- Best timing: 30-60 minutes before bed

**Edibles:**
- Onset: 30-120 minutes
- Peak: 2-4 hours
- Duration: 4-8 hours
- Best timing: 2-3 hours before bed

**Tinctures (Sublingual):**
- Onset: 15-45 minutes
- Peak: 90 minutes
- Duration: 4-6 hours
- Best timing: 1 hour before bed

### Creating a Cannabis Sleep Routine

**2-3 hours before bed:**
- Take edibles if using
- Begin winding down activities
- Dim lights and reduce screen time

**1 hour before bed:**
- Use tinctures if preferred
- Practice relaxation techniques
- Prepare bedroom environment

**30 minutes before bed:**
- Vape or smoke if using inhalation
- Final bathroom visit
- Get into bed with calming activity

## Dosing for Sleep

### Finding Your Sleep Dose

**Beginners:**
- THC: Start with 2.5-5mg
- CBD: Start with 10-25mg
- Increase gradually every few nights

**Regular Users:**
- THC: 5-20mg typical range
- CBD: 25-100mg for sleep
- Adjust based on tolerance

**Microdosing for Sleep:**
- 1-2.5mg THC
- May improve sleep without grogginess
- Good for sleep maintenance issues

### Avoiding Morning Grogginess

To minimize next-day effects:
- Don't overdose – more isn't always better
- Time consumption appropriately
- Stay hydrated
- Consider CBD-dominant products
- Allow 7-9 hours for sleep

## Best Practices for Cannabis Sleep Aid

### Set and Setting

Create optimal conditions:
- Cool, dark, quiet room
- Comfortable bedding
- Remove electronic devices
- Use aromatherapy if desired
- Practice good sleep hygiene

### Combining with Other Sleep Strategies

Cannabis works best alongside:
- Regular sleep schedule
- Exercise (not late evening)
- Meditation or relaxation
- Limiting caffeine and alcohol
- Addressing underlying issues

### Cycling and Tolerance

Prevent tolerance buildup:
- Take regular breaks (1-2 nights/week)
- Rotate strains/products
- Use minimum effective dose
- Consider CBD-only nights
- Track effectiveness over time

## Different Products for Different Needs

### For Falling Asleep Fast
- **Fast-acting tinctures**
- **Vape pens with indica strains**
- **Nano-enhanced edibles**

### For Staying Asleep
- **Traditional edibles**
- **Extended-release capsules**
- **Higher CBD ratios**

### For Morning Freshness
- **Lower THC doses**
- **CBD-dominant products**
- **Shorter-acting methods**

### For Pain-Related Sleep Issues
- **Topicals plus systemic dose**
- **High CBD with moderate THC**
- **Anti-inflammatory terpenes**

## Potential Risks and Considerations

### REM Sleep Suppression
Long-term heavy use may:
- Reduce dream recall
- Affect memory consolidation
- Cause vivid dreams upon cessation
- Impact emotional processing

### Dependence Concerns
Watch for:
- Inability to sleep without cannabis
- Increasing doses over time
- Anxiety about running out
- Withdrawal symptoms (insomnia, vivid dreams)

### Drug Interactions
Cannabis may interact with:
- Sleep medications
- Blood thinners
- Heart medications
- Psychiatric medications

Always consult healthcare providers.

## Creating Your Perfect Sleep Stack

### Sample Nighttime Protocols

**The Gentle Approach:**
- 10mg CBD tincture at 8 PM
- 2.5mg THC edible at 9 PM
- Lavender aromatherapy
- Bedtime at 10:30 PM

**The Fast-Acting Method:**
- 5mg THC vape at 10 PM
- CBD topical for any pain
- Meditation or reading
- Lights out by 10:30 PM

**The All-Night Support:**
- 5mg THC + 25mg CBD capsule at 8 PM
- Herbal tea with CBN honey
- Relaxing bath
- Sleep by 10 PM

## Tracking Your Sleep Progress

### What to Monitor
- Time to fall asleep
- Number of awakenings
- Morning alertness
- Dream recall
- Overall sleep quality

### Tools for Tracking
- Sleep diary or app
- Wearable devices
- Partner observations
- Morning mood ratings

## When Cannabis Isn't Working

If cannabis isn't improving sleep after 2-4 weeks:
- Reassess dosing and timing
- Try different products/strains
- Address sleep hygiene
- Consider other factors (stress, diet)
- Consult a sleep specialist

## The Library's Sleep Solutions

Our knowledgeable staff can help you find:
- Appropriate products for your sleep issues
- Proper dosing guidance
- Product recommendations based on your needs
- Information about terpene profiles
- Tips for optimizing your routine

## Conclusion

Cannabis can be a valuable tool in your sleep wellness toolkit, but it's not a magic solution. Success comes from finding the right product, dose, and timing while maintaining good sleep hygiene and addressing underlying issues.

Start low, go slow, and be patient as you discover what works for your unique sleep needs. Sweet dreams await at The Library – let us help you find your path to better rest.

*Disclaimer: This information is for educational purposes only. Cannabis affects everyone differently. Always consult with a healthcare provider before using cannabis for sleep issues, especially if you have existing health conditions or take other medications.*
    `,
    featuredImage: '/images/blog/cannabis-sleep.jpg',
    category: 'Health',
    tags: ['sleep', 'insomnia', 'health', 'wellness', 'indica', 'CBD'],
    author: {
      name: 'Dr. James Chen',
      title: 'Sleep Research Specialist',
      avatar: '/images/authors/james.jpg'
    },
    publishDate: '2025-01-15',
    readingTime: 12,
    featured: false
  },
  {
    id: '4',
    slug: 'cooking-with-cannabis-basics',
    title: 'Cooking with Cannabis: From Kitchen Basics to Gourmet Edibles',
    excerpt: 'Master the art of cannabis cooking with our comprehensive guide. Learn decarboxylation, dosing, infusion methods, and recipes for delicious homemade edibles.',
    content: `
# Cooking with Cannabis: From Kitchen Basics to Gourmet Edibles

The art of cooking with cannabis has evolved far beyond the stereotypical pot brownie. Today's cannabis cuisine ranges from simple infusions to sophisticated gourmet dishes that would be at home in any fine dining establishment. Whether you're a curious beginner or an experienced cook looking to expand your repertoire, this guide will equip you with the knowledge to safely and successfully incorporate cannabis into your culinary creations.

## Understanding the Basics

### Why Cook with Cannabis?

Cooking with cannabis offers unique advantages:
- **Longer-lasting effects** (4-8 hours vs. 1-3 for smoking)
- **No respiratory irritation**
- **Precise dosing potential**
- **Discrete consumption**
- **Full-body effects**
- **Creative culinary exploration**

### The Golden Rule: Decarboxylation

Before you can cook with cannabis, you must understand decarboxylation – the process that activates cannabinoids.

**What is Decarboxylation?**
Raw cannabis contains THCA and CBDA, which aren't psychoactive. Heat converts these into THC and CBD through decarboxylation.

**How to Decarboxylate:**
1. Preheat oven to 240°F (115°C)
2. Break up cannabis into small pieces
3. Spread evenly on parchment-lined baking sheet
4. Bake for 30-40 minutes, stirring every 10 minutes
5. Cannabis should be light brown and fragrant

**Pro Tips:**
- Don't exceed 250°F to preserve terpenes
- Use an oven thermometer for accuracy
- Store decarbed cannabis in airtight container
- Decarb more than you need and save for later

## Creating Cannabis Infusions

### Cannabis Butter (Cannabutter)

**Ingredients:**
- 1 cup unsalted butter
- 1 cup water
- 7-10 grams decarboxylated cannabis

**Method:**
1. Melt butter and water in saucepan
2. Add decarbed cannabis
3. Simmer on low (160-180°F) for 2-3 hours
4. Strain through cheesecloth
5. Refrigerate and separate water
6. Store in airtight container

### Cannabis Coconut Oil

**Why Coconut Oil?**
- High saturated fat content (better cannabinoid absorption)
- Vegan-friendly
- Higher smoke point than butter
- Longer shelf life

**Method:**
Same as cannabutter, but use 1 cup coconut oil (no water needed)

### Cannabis Tinctures

**Alcohol Method:**
1. Place decarbed cannabis in jar
2. Cover with high-proof alcohol (Everclear)
3. Store in dark place for 2-4 weeks, shaking daily
4. Strain and store in dropper bottles

**Glycerin Method:**
1. Mix decarbed cannabis with vegetable glycerin
2. Heat in slow cooker on low for 24 hours
3. Strain and bottle

## Dosing: The Most Important Part

### Calculating Potency

**Basic Formula:**
(Grams of cannabis × THC% × 1000) ÷ Number of servings = mg per serving

**Example:**
- 7g cannabis at 20% THC
- 7 × 0.20 × 1000 = 1400mg total THC
- Divided into 28 servings = 50mg per serving

### Standard Dosing Guidelines

**Microdose:** 1-2.5mg
- Subtle effects
- Good for beginners
- Functional dose

**Low Dose:** 3-5mg
- Mild euphoria
- Slight impairment
- Social dose

**Moderate Dose:** 5-15mg
- Noticeable effects
- Recreational dose
- Experienced users

**High Dose:** 20-30mg
- Strong effects
- Significant impairment
- Regular users only

**Very High Dose:** 50mg+
- Intense effects
- Medical patients
- High tolerance only

### First-Timer Protocol

1. Start with 2.5mg
2. Wait 2 full hours
3. Increase by 2.5mg if needed
4. Document your experience
5. Find your minimum effective dose

## Infusion Techniques

### Water Bath Method
Best for: Precise temperature control
- Use sous vide or slow cooker
- Maintains consistent temperature
- Prevents burning
- Preserves terpenes

### Oil Infusion Methods

**Slow Cooker Method:**
- 4-6 hours on low
- No stirring needed
- Set and forget

**Double Boiler:**
- More control
- No direct heat
- 2-3 hours

**Instant Pot:**
- Pressure cook setting
- 40 minutes high pressure
- Natural release

### Advanced Techniques

**Lecithin Addition:**
- Increases bioavailability
- Use 1 tbsp per cup of oil
- Add during infusion

**Water Curing:**
- Removes chlorophyll taste
- Soak cannabis in water 3-7 days
- Change water daily
- Dry completely before decarbing

## Cooking Methods and Tips

### Baking with Cannabis

**Temperature Considerations:**
- Keep oven below 350°F
- THC degrades above 390°F
- Lower temp, longer bake time
- Use oven thermometer

**Substitution Ratios:**
- Replace butter 1:1 with cannabutter
- Reduce regular butter by cannabutter amount
- Mix regular and infused for milder effects

### Savory Cooking

**Best Applications:**
- Sauces and dressings
- Soups (add at end)
- Pasta dishes
- Marinades
- Compound butters

**Avoid:**
- High-heat searing
- Deep frying
- Broiling
- Grilling directly

### No-Bake Options

Perfect for preserving cannabinoids:
- Energy balls
- Chocolate treats
- Nut butters
- Smoothies
- Salad dressings

## Recipe Collection

### Classic Cannabis Brownies (Upgraded)

**Ingredients:**
- 1/2 cup cannabutter
- 1 cup sugar
- 2 eggs
- 1/3 cup cocoa powder
- 1/2 cup flour
- 1/4 tsp salt
- 1/4 tsp vanilla
- 1/2 cup chocolate chips

**Method:**
1. Preheat oven to 325°F
2. Mix melted cannabutter and sugar
3. Add eggs one at a time
4. Fold in dry ingredients
5. Bake 25-30 minutes
6. Cool completely before cutting

**Dosing:** Makes 16 brownies, calculate based on your cannabutter potency

### Elevated Olive Oil

**Ingredients:**
- 2 cups extra virgin olive oil
- 14g decarbed cannabis
- 2 tsp lecithin

**Method:**
1. Combine in slow cooker
2. Cook on low 4 hours
3. Strain and bottle
4. Use for salads, bread, finishing

### Cannabis Honey

**Ingredients:**
- 1 cup honey
- 7g decarbed cannabis
- 1 tbsp coconut oil

**Method:**
1. Warm honey to 120°F
2. Mix in cannabis and oil
3. Maintain temp for 40 minutes
4. Strain while warm
5. Perfect for tea, toast, yogurt

### Gourmet Cannabis Compound Butter

**Ingredients:**
- 1/2 cup cannabutter (room temp)
- 2 cloves garlic (minced)
- 2 tbsp fresh herbs
- 1 tsp lemon zest
- Sea salt to taste

**Method:**
1. Whip cannabutter until fluffy
2. Fold in other ingredients
3. Roll in parchment paper
4. Refrigerate until firm
5. Slice and serve on steaks, vegetables

## Safety and Best Practices

### Kitchen Safety

- **Label everything clearly**
- **Store securely away from children/pets**
- **Never cook impaired**
- **Keep antidotes handy (CBD, black pepper)**
- **Have non-infused snacks ready**

### Avoiding Common Mistakes

**Overheating:** Destroys cannabinoids and terpenes
**Rushed decarb:** Incomplete activation
**Poor straining:** Gritty texture
**Impatient dosing:** Taking more too soon
**Uneven distribution:** Hot spots in final product

### Storage Guidelines

**Cannabutter/Oil:**
- Refrigerator: 2-3 months
- Freezer: 6 months
- Always airtight containers

**Baked Goods:**
- Room temp: 3 days
- Refrigerator: 1 week
- Freezer: 3 months

**Tinctures:**
- Dark bottle
- Cool, dark place
- Indefinite shelf life

## Troubleshooting Guide

**Too Strong?**
- Dilute with non-infused version
- Cut into smaller pieces
- Take with CBD
- Wait it out safely

**Too Weak?**
- Increase cannabis amount
- Improve decarb process
- Add lecithin
- Check cannabis quality

**Bad Taste?**
- Water cure first
- Use less cannabis
- Mask with strong flavors
- Try different strain

**Inconsistent Effects?**
- Mix infusions thoroughly
- Test potency
- Standardize process
- Consider tolerance

## Entertaining with Edibles

### Hosting Guidelines

- **Inform all guests**
- **Provide non-infused options**
- **Start with appetizers (gauge tolerance)**
- **Clear dosing labels**
- **Plan safe transportation**
- **Keep CBD on hand**

### Pairing Cannabis with Food

Like wine pairing, consider:
- Terpene profiles
- Flavor compatibility
- Effect timing
- Guest experience level

## Legal and Ethical Considerations

### Know Your Laws
- Home cultivation limits
- Possession limits
- Sharing restrictions
- Public consumption laws

### Ethical Practices
- Never dose someone unknowingly
- Keep away from minors
- Don't drive after consuming
- Respect others' choices
- Share knowledge responsibly

## Advanced Topics

### Nano-Emulsification
Creating water-soluble cannabis:
- Faster onset (15-30 minutes)
- Better bioavailability
- Use in beverages
- Requires special equipment

### Strain-Specific Cooking
Preserving terpene profiles:
- Low-temperature infusions
- Strain-paired recipes
- Terpene reintroduction
- Flavor matching

### Cannabis Cocktails
Non-alcoholic options:
- Cannabis simple syrup
- Infused bitters
- Terpene drops
- Nano-emulsified beverages

## Your Cannabis Kitchen Setup

### Essential Equipment
- Digital scale
- Thermometer
- Slow cooker
- Cheesecloth
- Storage containers
- Labels

### Nice to Have
- Infusion machine
- Sous vide
- Decarb device
- Potency tester

## Visit The Library

Stop by The Library for:
- Quality flower for cooking
- Dosing consultations
- Recipe suggestions
- Equipment recommendations
- Local cooking class information

## Conclusion

Cooking with cannabis is both an art and a science. Start simple, be patient with dosing, and always prioritize safety. With practice, you'll develop the skills to create incredible edibles that deliver both flavor and effect.

Remember: the journey is just as important as the destination. Enjoy experimenting, learn from each batch, and share your successes (responsibly) with others.

*Legal Note: Always comply with local laws regarding cannabis possession, cultivation, and consumption. Never provide cannabis edibles to minors or anyone without their explicit knowledge and consent.*
    `,
    featuredImage: '/images/blog/cannabis-cooking.jpg',
    category: 'Lifestyle',
    tags: ['edibles', 'cooking', 'recipes', 'dosing', 'DIY'],
    author: {
      name: 'Chef Maria Rodriguez',
      title: 'Cannabis Culinary Expert',
      avatar: '/images/authors/maria.jpg'
    },
    publishDate: '2025-01-12',
    readingTime: 15,
    featured: false
  }
];

// Helper function to get a single blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

// Helper function to get featured posts
export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.featured);
};

// Helper function to get posts by category
export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

// Helper function to get posts by tag
export const getPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags.includes(tag));
};

// Helper function to get related posts
export const getRelatedPosts = (currentPost: BlogPost, limit: number = 3): BlogPost[] => {
  return blogPosts
    .filter(post => post.id !== currentPost.id)
    .filter(post =>
      post.category === currentPost.category ||
      post.tags.some(tag => currentPost.tags.includes(tag))
    )
    .slice(0, limit);
};

// Helper function for pagination
export const getPaginatedPosts = (page: number, postsPerPage: number = 6): {
  posts: BlogPost[];
  totalPages: number;
  currentPage: number;
} => {
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = blogPosts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  return {
    posts: paginatedPosts,
    totalPages,
    currentPage: page
  };
};