// entities/all.ts

export interface EventData {
  id?: string;
  title: string;
  description?: string;
  date: string;
  time?: string;
  location?: string;
  category?: "Academic" | "Sport" | "Social" | "Community" | "Arts";
  image_url?: string;
  created_date?: string;
}

export interface NewsArticleData {
  id?: string;
  title: string;
  content: string;
  category: string;
  image_url?: string;
  created_date: string; // Required field
}

export class Event {
  id?: string;
  title!: string;
  description?: string;
  date!: string;
  time?: string;
  location?: string;
  category: "Academic" | "Sport" | "Social" | "Community" | "Arts";
  image_url?: string;
  created_date?: string;

  constructor(data: EventData) {
    Object.assign(this, data);
    this.category = data.category || "Community";
  }

  static async list(sortBy: string = "-date", limit: number = 10): Promise<Event[]> {
    // Mock data - replace with your actual API call
    const mockData: EventData[] = [
      {
        id: '1',
        title: 'Open House Day',
        description: 'Join us for our annual Open House Day where prospective students and families can tour our campus and meet our faculty.',
        category: 'Academic',
        image_url: 'https://media.istockphoto.com/id/1333137276/photo/commercial-realtors-attending-open-house-in-modern-office.jpg?s=612x612&w=0&k=20&c=blKeBWIrQyqWoU_-EOtvW74wcH4xDpPC7IIsAElgLGI=',
        date: '2025-02-15',
        time: '10:00 AM - 2:00 PM',
        location: 'Main Campus'
      },
      {
        id: '2',
        title: 'Science Fair Competition',
        description: 'Students will present their innovative science projects in our annual Science Fair competition.',
        category: 'Academic',
        image_url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&h=300&fit=crop',
        date: '2025-02-20',
        time: '1:00 PM - 4:00 PM',
        location: 'Science Building'
      },
      {
        id: '3',
        title: 'Basketball Championship',
        description: 'Cheer on our varsity basketball team in the regional championship finals.',
        category: 'Sport',
        image_url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=300&fit=crop',
        date: '2025-02-25',
        time: '7:00 PM - 9:00 PM',
        location: 'Sports Complex'
      },
      {
        id: '4',
        title: 'Art Exhibition Opening',
        description: 'Celebrate creativity at our annual student art exhibition opening night.',
        category: 'Arts',
        image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop',
        date: '2025-03-01',
        time: '6:00 PM - 8:00 PM',
        location: 'Art Gallery'
      }
    ];

    // Sort data based on sortBy parameter
    let sortedData = [...mockData];
    if (sortBy === "-date") {
      sortedData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (sortBy === "date") {
      sortedData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    }

    // Apply limit
    const limitedData = sortedData.slice(0, limit);

    // Convert to Event instances
    return limitedData.map(data => new Event(data));
  }

  static async find(id: string): Promise<Event | null> {
    const events = await Event.list();
    return events.find(event => event.id === id) || null;
  }

  async save(): Promise<Event> {
    // Mock save - replace with your actual API call
    if (!this.id) {
      this.id = Math.random().toString(36).substr(2, 9);
      this.created_date = new Date().toISOString();
    }
    return this;
  }
}

export class NewsArticle {
  id?: string;
  title!: string;
  content!: string;
  category!: string;
  image_url?: string;
  created_date!: string; // Required field

  constructor(data: NewsArticleData) {
    Object.assign(this, data);
  }

  static async list(sortBy: string = "-created_date", limit: number = 10): Promise<NewsArticle[]> {
    // Mock data - replace with your actual API call
    const mockData: NewsArticleData[] = [
      {
        id: '1',
        title: 'New Science Lab Opens at Flamingo Academy',
        content: 'We are excited to announce the opening of our state-of-the-art science laboratory, equipped with the latest technology to enhance our students\' learning experience. The new facility features modern equipment for chemistry, physics, and biology experiments.',
        category: 'Academics',
        image_url: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=500&h=300&fit=crop',
        created_date: '2025-01-28'
      },
      {
        id: '2',
        title: 'Student Art Exhibition Success',
        content: 'Our annual student art exhibition was a tremendous success, showcasing the incredible talent and creativity of our young artists. The event featured paintings, sculptures, and digital art from students across all grade levels.',
        category: 'Arts',
        image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop',
        created_date: '2025-01-25'
      },
      {
        id: '3',
        title: 'Sports Team Wins Regional Championship',
        content: 'Congratulations to our varsity basketball team for winning the regional championship after an intense final match. The team showed exceptional teamwork and determination throughout the tournament.',
        category: 'Sports',
        image_url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=500&h=300&fit=crop',
        created_date: '2025-01-22'
      },
      {
        id: '4',
        title: 'New Library Resources Available',
        content: 'We\'ve expanded our library collection with new digital resources and study spaces. Students now have access to over 10,000 e-books and improved quiet study areas.',
        category: 'Academics',
        image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
        created_date: '2025-01-20'
      },
      {
        id: '5',
        title: 'Community Service Project Success',
        content: 'Our students participated in a community cleanup project, collecting over 500 pounds of litter from local parks. This initiative demonstrates our commitment to environmental stewardship.',
        category: 'Community',
        image_url: 'https://media.istockphoto.com/id/2155998567/photo/happy-people-volunteer-and-packing-with-bags-for-charity-food-and-community-service-at.jpg?s=612x612&w=0&k=20&c=3mu8-OVW8G4c6vHoozZCuZfBDJfm_YqXMbIpxPC4wqw=',
        created_date: '2025-01-18'
      },
      {
        id: '6',
        title: 'Technology Upgrade Complete',
        content: 'We\'ve completed a major technology upgrade across all classrooms, installing new interactive whiteboards and improving Wi-Fi connectivity throughout the campus.',
        category: 'Technology',
        image_url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop',
        created_date: '2025-01-15'
      }
    ];

    // Sort data based on sortBy parameter
    let sortedData = [...mockData];
    if (sortBy === "-created_date") {
      sortedData.sort((a, b) => new Date(b.created_date).getTime() - new Date(a.created_date).getTime());
    } else if (sortBy === "created_date") {
      sortedData.sort((a, b) => new Date(a.created_date).getTime() - new Date(b.created_date).getTime());
    }

    // Apply limit
    const limitedData = sortedData.slice(0, limit);

    // Convert to NewsArticle instances
    return limitedData.map(data => new NewsArticle(data));
  }

  static async find(id: string): Promise<NewsArticle | null> {
    const articles = await NewsArticle.list();
    return articles.find(article => article.id === id) || null;
  }

  async save(): Promise<NewsArticle> {
    // Mock save - replace with your actual API call
    if (!this.id) {
      this.id = Math.random().toString(36).substr(2, 9);
      this.created_date = new Date().toISOString();
    }
    return this;
  }
}