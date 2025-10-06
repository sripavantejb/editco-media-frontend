// // Import React
// import React from 'react'
// // Import Navbar component
// import Navbar from './Navbar'

// // Main Blogs component
// function Blogs() {
//   // Blog posts data - this could come from a CMS or database later
//   const blogPosts = [
//     {
//       id: 1,
//       title: 'The Future of AI in Web Development',
//       excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and design websites.',
//       content: 'Artificial intelligence is transforming web development in unprecedented ways...',
//       author: 'Mike Chen',
//       date: '2024-01-15',
//       readTime: '5 min read',
//       category: 'Technology',
//       image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
//       featured: true
//     },
//     {
//       id: 2,
//       title: 'Design Trends That Will Dominate 2024',
//       excerpt: 'Discover the visual design trends that are shaping the digital landscape this year.',
//       content: 'As we navigate through 2024, several design trends are emerging...',
//       author: 'Sarah Johnson',
//       date: '2024-01-10',
//       readTime: '7 min read',
//       category: 'Design',
//       image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop',
//       featured: false
//     },
//     {
//       id: 3,
//       title: 'Building Scalable React Applications',
//       excerpt: 'Best practices and patterns for creating maintainable and scalable React applications.',
//       content: 'Building scalable React applications requires careful planning...',
//       author: 'John Smith',
//       date: '2024-01-05',
//       readTime: '8 min read',
//       category: 'Development',
//       image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
//       featured: false
//     },
//     {
//       id: 4,
//       title: 'Social Media Marketing Strategies That Work',
//       excerpt: 'Proven strategies to boost your social media presence and engagement.',
//       content: 'Social media marketing has evolved significantly over the years...',
//       author: 'Sarah Johnson',
//       date: '2024-01-01',
//       readTime: '6 min read',
//       category: 'Marketing',
//       image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
//       featured: false
//     },
//     {
//       id: 5,
//       title: 'The Psychology of Color in Branding',
//       excerpt: 'How color choices impact brand perception and consumer behavior.',
//       content: 'Color psychology plays a crucial role in branding and marketing...',
//       author: 'John Smith',
//       date: '2023-12-28',
//       readTime: '4 min read',
//       category: 'Branding',
//       image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop',
//       featured: false
//     },
//     {
//       id: 6,
//       title: 'Mobile-First Design: Why It Matters',
//       excerpt: 'Understanding the importance of mobile-first design in today\'s digital world.',
//       content: 'Mobile-first design is no longer optional in today\'s digital landscape...',
//       author: 'Mike Chen',
//       date: '2023-12-25',
//       readTime: '5 min read',
//       category: 'Design',
//       image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
//       featured: false
//     }
//   ]

//   // Blog categories for filtering
//   const categories = ['All', 'Technology', 'Design', 'Development', 'Marketing', 'Branding']

//   // Helper function to create a blog post card
//   const createBlogCard = (post) => {
//     return (
//       <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
//         {/* Blog post image */}
//         <div className="relative overflow-hidden">
//           <img
//             src={post.image}
//             alt={post.title}
//             className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//           />
//           {/* Category badge */}
//           <div className="absolute top-4 left-4">
//             <span className="bg-[#ffd600] text-black px-3 py-1 rounded-full text-sm font-medium">
//               {post.category}
//             </span>
//           </div>
//           {/* Featured badge */}
//           {post.featured && (
//             <div className="absolute top-4 right-4">
//               <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
//                 Featured
//               </span>
//             </div>
//           )}
//         </div>
        
//         {/* Blog post content */}
//         <div className="p-6">
//           {/* Post metadata */}
//           <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
//             <span>{post.author}</span>
//             <span>•</span>
//             <span>{post.date}</span>
//             <span>•</span>
//             <span>{post.readTime}</span>
//           </div>
          
//           {/* Post title */}
//           <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#ffd600] transition-colors duration-200">
//             {post.title}
//           </h3>
          
//           {/* Post excerpt */}
//           <p className="text-white/70 leading-relaxed mb-4">
//             {post.excerpt}
//           </p>
          
//           {/* Read more button */}
//           <button className="text-[#ffd600] font-medium hover:text-[#fff9be] transition-colors duration-200">
//             Read More →
//           </button>
//         </div>
//       </article>
//     )
//   }

//   // Helper function to create a featured blog card (larger)
//   const createFeaturedCard = (post) => {
//     return (
//       <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
//         {/* Featured post image */}
//         <div className="relative overflow-hidden">
//           <img
//             src={post.image}
//             alt={post.title}
//             className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//           />
//           {/* Featured overlay */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
//           {/* Category and featured badges */}
//           <div className="absolute top-4 left-4 flex gap-2">
//             <span className="bg-[#ffd600] text-black px-3 py-1 rounded-full text-sm font-medium">
//               {post.category}
//             </span>
//             <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
//               Featured
//             </span>
//           </div>
          
//           {/* Featured content overlay */}
//           <div className="absolute bottom-6 left-6 right-6">
//             <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#ffd600] transition-colors duration-200">
//               {post.title}
//             </h2>
//             <p className="text-white/90 leading-relaxed mb-4">
//               {post.excerpt}
//             </p>
//             <div className="flex items-center gap-4 text-sm text-white/70 mb-4">
//               <span>{post.author}</span>
//               <span>•</span>
//               <span>{post.date}</span>
//               <span>•</span>
//               <span>{post.readTime}</span>
//             </div>
//             <button className="text-[#ffd600] font-medium hover:text-[#fff9be] transition-colors duration-200">
//               Read Full Article →
//             </button>
//           </div>
//         </div>
//       </article>
//     )
//   }

//   // Helper function to create a category filter button
//   const createCategoryButton = (category, isActive = false) => {
//     return (
//       <button
//         className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
//           isActive
//             ? 'bg-[#ffd600] text-black'
//             : 'bg-white/10 text-white hover:bg-white/20'
//         }`}
//       >
//         {category}
//       </button>
//     )
//   }

//   // Main component return (what gets displayed on screen)
//   return (
//     <div className="min-h-screen bg-[#1d1d1f]">
//       {/* Navigation bar at the top */}
//       <Navbar />
      
//       {/* Main content area - starts below the fixed navbar */}
//       <div className="pt-24">
        
//         {/* Hero Section with Large Text */}
//         <section className="px-4 py-8 flex flex-col justify-start">
//           <div className="flex items-center">
//             <h1 className="text-[15vw] leading-none tracking-tight font-extrabold text-[#d5d20d] opacity-80 select-none">
//               BLOG
//             </h1>
//           </div>
//         </section>

//         {/* Search and Filter Section */}
//         <section className="px-4 py-8">
//           <div className="max-w-6xl mx-auto">
//             {/* Search and filter section */}
//             <div className="max-w-2xl mx-auto">
//               {/* Search bar */}
//               <div className="relative mb-6">
//                 <input
//                   type="text"
//                   placeholder="Search articles..."
//                   className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ffd600]/50 focus:border-transparent transition-all duration-200"
//                 />
//                 <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50">
//                   🔍
//                 </div>
//               </div>
              
//               {/* Category filters */}
//               <div className="flex flex-wrap gap-3 justify-center">
//                 {/* Loop through categories and create filter buttons */}
//                 {categories.map((category, index) => (
//                   <div key={index}>
//                     {createCategoryButton(category, index === 0)}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Featured Post Section */}
//         <section className="px-4 py-8">
//           <div className="max-w-6xl mx-auto">
//             {/* Section title */}
//             <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
//               Featured <span className="text-[#ffd600]">Article</span>
//             </h2>
            
//             {/* Featured post */}
//             <div className="mb-16">
//               {createFeaturedCard(blogPosts.find(post => post.featured))}
//             </div>
//           </div>
//         </section>

//         {/* Blog Posts Grid Section */}
//         <section className="px-4 py-8">
//           <div className="max-w-6xl mx-auto">
//             {/* Section title */}
//             <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
//               Latest <span className="text-[#ffd600]">Articles</span>
//             </h2>
            
//             {/* Blog posts grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {/* Loop through non-featured posts and create blog cards */}
//               {blogPosts.filter(post => !post.featured).map((post) => (
//                 <div key={post.id}>
//                   {createBlogCard(post)}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Newsletter Signup Section */}
//         <section className="px-4 py-16 bg-white/5">
//           <div className="max-w-4xl mx-auto text-center">
//             {/* Newsletter content */}
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//               Stay <span className="text-[#ffd600]">Updated</span>
//             </h2>
//             <p className="text-xl text-white/70 mb-8 leading-relaxed">
//               Get the latest insights, tips, and industry news delivered straight to your inbox.
//             </p>
            
//             {/* Newsletter signup form */}
//             <div className="max-w-md mx-auto">
//               <div className="flex gap-4">
//                 {/* Email input */}
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#ffd600]/50 focus:border-transparent transition-all duration-200"
//                 />
                
//                 {/* Subscribe button */}
//                 <button className="relative px-6 py-3 text-white border border-white/30 rounded-xl overflow-hidden group">
//                   {/* Button background gradient */}
//                   <span className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-[#ffd600] to-[#fff9be] transition-all duration-500 ease-in-out group-hover:h-full"></span>
                  
//                   {/* Button content */}
//                   <span className="relative z-10 font-medium">Subscribe</span>
//                 </button>
//               </div>
              
//               {/* Privacy notice */}
//               <p className="text-sm text-white/50 mt-4">
//                 We respect your privacy. Unsubscribe at any time.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Call to Action Section */}
//         <section className="px-4 py-16 md:py-24">
//           <div className="max-w-4xl mx-auto text-center">
//             {/* CTA content */}
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//               Ready to Work <span className="text-[#ffd600]">Together</span>?
//             </h2>
//             <p className="text-xl text-white/70 mb-8 leading-relaxed">
//               Let's discuss your project and see how we can help bring your ideas to life.
//             </p>
            
//             {/* CTA buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               {/* Connect button */}
//               <a href="/connect">
//                 <button className="relative inline-flex items-center justify-center px-8 py-4 text-white border border-white/30 rounded-xl overflow-hidden group">
//                   {/* Button background gradient */}
//                   <span className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-[#ffd600] to-[#fff9be] transition-all duration-500 ease-in-out group-hover:h-full"></span>
                  
//                   {/* Button content */}
//                   <span className="relative z-10 text-lg font-medium">Start a Project</span>
//                 </button>
//               </a>
              
//               {/* About button */}
//               <a href="/about">
//                 <button className="relative inline-flex items-center justify-center px-8 py-4 text-white border border-white/20 rounded-xl overflow-hidden group bg-transparent">
//                   {/* Button background gradient */}
//                   <span className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-[#ffd600] to-[#fff9be] transition-all duration-500 ease-in-out group-hover:h-full"></span>
                  
//                   {/* Button content */}
//                   <span className="relative z-10 text-lg font-medium">Learn More</span>
//                 </button>
//               </a>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }

// export default Blogs
