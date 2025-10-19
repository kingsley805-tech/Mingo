import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Calendar,
  User,
  ArrowRight,
  Search,
  Trophy,
  GraduationCap,
  BookOpen,
  Users,
  X,
  Clock
} from "lucide-react";

export default function News() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [selectedNews, setSelectedNews] = React.useState<any>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const categories = [
    { id: "all", name: "All News", icon: BookOpen },
    { id: "academic", name: "Academic", icon: GraduationCap },
    { id: "achievements", name: "Achievements", icon: Trophy },
    { id: "community", name: "Community", icon: Users }
  ];

  const featuredNews = {
    title: "Flamingo Students Win National Climate Change Competition",
    excerpt: "Our advanced science team took first place at the National Youth Science Competition, showcasing innovative solutions to environmental challenges.",
    date: "December 15, 2024",
    author: "Dr. Sarah Johnson",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "achievements",
    fullContent: `Our advanced science team, led by senior students Maria Rodriguez and James Chen, has achieved an extraordinary milestone by winning first place at the prestigious National Youth Science Competition held in Washington D.C.

The team's groundbreaking project, "Sustainable Solutions for Urban Climate Adaptation," impressed judges with its innovative approach to addressing environmental challenges in metropolitan areas. Their research focused on developing cost-effective green infrastructure solutions that can be implemented in urban environments.

The winning project included:
• A comprehensive analysis of urban heat island effects
• Development of smart irrigation systems using IoT technology
• Creation of modular green wall systems for apartment buildings
• Economic modeling showing 40% cost reduction compared to traditional solutions

Dr. Sarah Johnson, the team's advisor and head of the Environmental Science Department, expressed immense pride in the students' achievement. "This victory represents not just academic excellence, but the practical application of scientific knowledge to solve real-world problems," she stated.

The competition featured over 200 teams from schools across the nation, making this victory particularly significant. The Flamingo team's presentation was praised for its scientific rigor, innovative thinking, and practical applicability.

This achievement continues Flamingo's tradition of excellence in environmental science education and reinforces our commitment to nurturing the next generation of environmental leaders.`,
    readTime: "5 min read"
  };

  const newsItems = [
    {
      title: "Class of 2024 Achieves 90% College Acceptance Rate",
      excerpt: "Our graduating class continues the tradition of academic college ltd with record-breaking college admissions results.",
      date: "December 5, 2024",
      author: "Guidance Department",
      image: "https://images.unsplash.com/photo-1628478610525-d58db81ad080?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QkxBQ0tTJTIwZ3JhZHVBVEVTfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      category: "achievements",
      readTime: "2 min read",
      fullContent: `The Class of 2024 has set a new standard for academic excellence at Flamingo Academic College, achieving an impressive 90% college acceptance rate that surpasses our previous record of 87%.

This remarkable achievement reflects the dedication of our students, the support of our faculty, and the comprehensive college preparation program that Flamingo has developed over the years. The graduating class of 156 students received acceptances from prestigious institutions including Ivy League universities, state flagship schools, and specialized programs.

Key highlights of this year's college admissions success:
• 23 students accepted to Ivy League institutions
• 45 students received merit-based scholarships totaling over $2.3 million
• 12 students accepted to specialized pre-med and engineering programs
• Average SAT score of 1420, well above national average

Our guidance department, led by Ms. Patricia Williams, attributes this success to our holistic approach to college preparation. "We don't just focus on test scores," she explains. "We help students develop their unique voice, pursue meaningful extracurricular activities, and craft compelling personal narratives."

The achievement also reflects Flamingo's commitment to supporting students from diverse backgrounds, with 40% of accepted students being first-generation college attendees.`
    },
    {
      title: "Student-Led Environmental Initiative Goes Viral",
      excerpt: "Our Environmental Club's campus sustainability project has inspired schools nationwide to implement similar programs.",
      date: "November 28, 2024",
      author: "Environmental Club",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "community",
      readTime: "3 min read",
      fullContent: `What started as a small campus initiative by Flamingo's Environmental Club has become a nationwide movement, inspiring over 200 schools to implement similar sustainability programs.

The "Green Campus Revolution" project, spearheaded by junior students Emma Thompson and David Park, began as a simple idea to reduce waste and increase recycling on campus. However, their innovative approach and impressive results caught the attention of environmental organizations and educational institutions across the country.

The initiative's success can be attributed to several key components:
• Student-designed waste reduction strategies that reduced campus waste by 60%
• Implementation of composting systems that diverted 2 tons of organic waste monthly
• Creation of a "Green Ambassador" program training students to lead environmental initiatives
• Development of educational materials shared with other schools nationwide

The project gained viral attention on social media when a video showcasing the students' innovative recycling stations received over 500,000 views. This led to inquiries from schools in 35 states wanting to replicate the program.

"We never expected our small project to have such a big impact," said Emma Thompson, co-founder of the initiative. "It's amazing to see how students across the country are taking action for environmental sustainability."

The Environmental Club has now partnered with the National Association of Secondary School Principals to create a toolkit that other schools can use to implement similar programs.`
    },
    {
      title: "Technology Integration Award Received",
      excerpt: "Flamingo recognized as 'School of Excellence' for innovative use of technology in education by the State Board.",
      date: "November 25, 2024",
      author: "Technology Department",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "achievements",
      readTime: "4 min read",
      fullContent: `Flamingo Academic College has been honored with the prestigious "School of Excellence in Technology Integration" award by the State Board of Education, recognizing our innovative approach to incorporating technology into the learning experience.

This award acknowledges Flamingo's comprehensive technology program that has transformed how students learn and teachers instruct. The recognition comes after a rigorous evaluation process that included classroom observations, student surveys, and analysis of learning outcomes.

Our technology integration achievements include:
• Implementation of personalized learning platforms that adapt to individual student needs
• Development of virtual reality labs for science and history classes
• Creation of coding curriculum starting from elementary grades
• Integration of AI-powered tutoring systems that provide 24/7 academic support

Dr. Michael Chen, head of the Technology Department, expressed pride in the recognition. "This award validates our belief that technology should enhance, not replace, the human elements of education," he stated. "We've focused on using technology to create more engaging, personalized, and effective learning experiences."

The evaluation committee particularly praised Flamingo's approach to digital citizenship education, ensuring students not only use technology effectively but also responsibly and ethically. Our comprehensive digital literacy program has become a model for other schools in the district.

The award includes a $50,000 grant that will be used to expand our technology initiatives, including the development of new virtual learning environments and the acquisition of cutting-edge educational technology tools.`
    }
  ];

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : BookOpen;
  };

 const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    academic: "bg-blue-100 text-blue-800",
    achievements: "bg-green-100 text-green-800",
    community: "bg-purple-100 text-purple-800"
  };

  return colors[category] || "bg-gray-100 text-gray-800";
};

  const openModal = (newsItem: any) => {
    setSelectedNews(newsItem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNews(null);
  };


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="School news"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-bg/10 opacity-85"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              School <span className="text-[#E476CD]">News</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Stay connected with the latest updates, achievements, and events from our vibrant school community.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between animate-slide-up">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 ${
                    selectedCategory === category.id 
                      ? "bg-[#E476CD] hover:bg-[#d165b8] text-white" 
                      : "border-[#E476CD] text-[#E476CD] hover:bg-[#E476CD] hover:text-white"
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="text-gradient">News</span>
            </h2>
          </div>

          <Card className="overflow-hidden hover-lift animate-slide-up border-0 shadow-xl">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <CardContent className="lg:w-1/2 p-8 lg:p-12">
                <Badge className={getCategoryColor(featuredNews.category)}>
                  {featuredNews.category}
                </Badge>
                <h3 className="text-3xl font-bold text-gray-900 mt-4 mb-4">
                  {featuredNews.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {featuredNews.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{featuredNews.date}</span>
                  <User className="w-4 h-4 mr-2" />
                  <span>{featuredNews.author}</span>
                </div>
                <Button 
                  className="bg-[#E476CD] hover:bg-[#d165b8] text-white hover-lift border-0"
                  onClick={() => openModal(featuredNews)}
                >
                  Read Full Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest <span className="text-gradient">Updates</span>
            </h2>
            <p className="text-xl text-gray-600">Stay informed with our most recent news and announcements</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news, index) => {
              const IconComponent = getCategoryIcon(news.category);
              return (
                <Card 
                  key={news.title}
                  className="hover-lift animate-slide-up border-0 shadow-lg overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={getCategoryColor(news.category)}>
                        <IconComponent className="w-3 h-3 mr-1" />
                        {news.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{news.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{news.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{news.author}</span>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full border-[#E476CD] text-[#E476CD] hover:bg-[#E476CD] hover:text-white"
                      onClick={() => openModal(news)}
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12 animate-slide-up">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-500 mb-2">No news found</h3>
              <p className="text-gray-400">Try adjusting your search terms or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">Stay In The Loop</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss important updates, events, and achievements from Flamingo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white text-gray-900"
              />
              <Button className="bg-[#E476CD] hover:bg-[#d165b8] text-white whitespace-nowrap border-0">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* News Modal */}
      {isModalOpen && selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Badge className={getCategoryColor(selectedNews.category)}>
                  {selectedNews.category}
                </Badge>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{selectedNews.readTime}</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="p-6">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedNews.title}
              </h1>
              
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="mr-4">{selectedNews.date}</span>
                <User className="w-4 h-4 mr-2" />
                <span>{selectedNews.author}</span>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {selectedNews.fullContent}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}