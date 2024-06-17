// Leaders.tsx
import React from 'react';

const leaders = [
  {
    name: 'Dr. Bhaskar Ghosh',
    title: 'Chief Strategy Officer',
    imgSrc: 'https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=',
    linkedIn: 'https://www.linkedin.com/in/drbhaskargosh',
  },
  {
    name: 'Kishore Durg',
    title: 'Global Lead – Accenture LearnVantage',
    imgSrc: 'https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/E12KS1G65-W0168RE00G7-133faf432639-512.jpeg',
    linkedIn: 'https://www.linkedin.com/in/kishoredurg',
  },
  {
    name: 'Kai Roemmelt',
    title: 'Udacity Lead – Accenture LearnVantage',
    imgSrc: 'https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/E12KS1G65-W0168RE00G7-133faf432639-512.jpeg',
    linkedIn: 'https://www.linkedin.com/in/kairoemmelt',
  },
  {
    name: 'Professor Majd Sakr',
    title: 'Chief Learning & Research Officer – Accenture LearnVantage',
    imgSrc: 'https://www.ey.com/content/dam/content-fragments/ey-unified-site/ey-com/people/global/en/images/a/ey-alam-hussain-people-profile-v1-meta.jpg',
    linkedIn: 'https://www.linkedin.com/in/professormajdsakr',
  },
  {
    name: 'Kai Roemmelt',
    title: 'Udacity Lead – Accenture LearnVantage',
    imgSrc: 'https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/E12KS1G65-W0168RE00G7-133faf432639-512.jpeg',
    linkedIn: 'https://www.linkedin.com/in/kairoemmelt',
  },
  {
    name: 'Professor Majd Sakr',
    title: 'Chief Learning & Research Officer – Accenture LearnVantage',
    imgSrc: 'https://www.ey.com/content/dam/content-fragments/ey-unified-site/ey-com/people/global/en/images/a/ey-alam-hussain-people-profile-v1-meta.jpg',
    linkedIn: 'https://www.linkedin.com/in/professormajdsakr',
  },
];


const Leaders: React.FC = () => {
  return (
    <div className="bg-black text-white py-16 px-8">
      <h1 className="text-3xl font-bold mb-8">Our leaders</h1>
      <div className="grid grid-cols-1 ml-20 items-end md:grid-cols-2 gap-12">
        {leaders.map((leader, index) => (
          <div key={index} className="flex items-center">
            <img src={leader.imgSrc} alt={leader.name} className="h-32 w-32 object-cover rounded-full" />
            <div className="ml-6">
              <h2 className="text-xl font-semibold">{leader.name}</h2>
              <p className="text-gray-400">{leader.title}</p>
              <a href={leader.linkedIn} target="_blank" rel="noopener noreferrer" className="mt-2 block">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="h-6 w-6" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaders;
