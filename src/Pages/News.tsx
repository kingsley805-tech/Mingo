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
  Users
} from "lucide-react";

export default function News() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const categories = [
    { id: "all", name: "All News", icon: BookOpen },
    { id: "academic", name: "Academic", icon: GraduationCap },
    { id: "achievements", name: "Achievements", icon: Trophy },
    { id: "community", name: "Community", icon: Users }
  ];

  const featuredNews = {
    title: "Flamingo Students Win National Science Competition",
    excerpt: "Our advanced science team took first place at the National Youth Science Competition, showcasing innovative solutions to environmental challenges.",
    date: "December 15, 2024",
    author: "Dr. Sarah Johnson",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "achievements"
  };

  const newsItems = [
    {
      title: "New STEM Innovation Lab Opens",
      excerpt: "State-of-the-art facility featuring 3D printing, robotics, and advanced computing resources now available to all students.",
      date: "December 10, 2024",
      author: "Principal Thompson",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "academic",
      readTime: "3 min read"
    },
    {
      title: "Annual Arts Festival Breaks Attendance Records",
      excerpt: "Over 2,000 community members attended our three-day celebration of student creativity and artistic expression.",
      date: "December 8, 2024",
      author: "Ms. Lisa Thompson",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "community",
      readTime: "4 min read"
    },
    {
      title: "Class of 2024 Achieves 98% College Acceptance Rate",
      excerpt: "Our graduating class continues the tradition of academic excellence with record-breaking college admissions results.",
      date: "December 5, 2024",
      author: "Guidance Department",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "achievements",
      readTime: "2 min read"
    },
    {
      title: "International Exchange Program Expands",
      excerpt: "New partnerships with schools in Japan and Germany offer students unprecedented cultural learning opportunities.",
      date: "December 1, 2024",
      author: "Prof. Maria Garcia",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "academic",
      readTime: "5 min read"
    },
    {
      title: "Student-Led Environmental Initiative Goes Viral",
      excerpt: "Our Environmental Club's campus sustainability project has inspired schools nationwide to implement similar programs.",
      date: "November 28, 2024",
      author: "Environmental Club",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "community",
      readTime: "3 min read"
    },
    {
      title: "Technology Integration Award Received",
      excerpt: "Flamingo recognized as 'School of Excellence' for innovative use of technology in education by the State Board.",
      date: "November 25, 2024",
      author: "Technology Department",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "achievements",
      readTime: "4 min read"
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
                <Button className="bg-[#E476CD] hover:bg-[#d165b8] text-white hover-lift border-0">
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
    </div>
  );
}