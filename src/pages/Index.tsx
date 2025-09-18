import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const equipmentItems = [
    {
      id: 1,
      name: "Телеобъектив 70-200mm f/2.8",
      category: "Объективы",
      description: "Идеальный для съемки диких животных на расстоянии. Превосходная светосила для работы в сумерках.",
      price: "150,000₽",
      rating: 4.9,
      icon: "Camera"
    },
    {
      id: 2,
      name: "Камуфляжная палатка-скрадок",
      category: "Аксессуары",
      description: "Позволяет незаметно наблюдать и фотографировать животных в их естественной среде.",
      price: "25,000₽",
      rating: 4.7,
      icon: "Home"
    },
    {
      id: 3,
      name: "Штатив из карбона",
      category: "Опоры",
      description: "Легкий и прочный штатив для длительных съемок. Устойчив к влаге и температурным перепадам.",
      price: "45,000₽",
      rating: 4.8,
      icon: "TrendingUp"
    }
  ];

  const photographyTips = [
    {
      id: 1,
      title: "Золотые часы съемки",
      description: "Лучшее время для фотоохоты - рассвет и закат. Мягкий свет создает волшебную атмосферу.",
      icon: "Sun",
      category: "Освещение"
    },
    {
      id: 2,
      title: "Терпение - ключ к успеху",
      description: "Готовьтесь ждать часами. Дикие животные непредсказуемы, но результат стоит потраченного времени.",
      icon: "Clock",
      category: "Поведение"
    },
    {
      id: 3,
      title: "Изучите повадки животных",
      description: "Знание маршрутов и привычек животных поможет выбрать лучшую позицию для съемки.",
      icon: "Search",
      category: "Подготовка"
    },
    {
      id: 4,
      title: "Бесшумная съемка",
      description: "Отключите звуки камеры и используйте тихие режимы съемки, чтобы не спугнуть объект.",
      icon: "Volume2",
      category: "Техника"
    }
  ];

  const photographyLocations = [
    {
      id: 1,
      name: "Алтайский заповедник",
      region: "Республика Алтай",
      animals: ["Снежный барс", "Марал", "Беркут"],
      bestTime: "Май-сентябрь",
      difficulty: "Высокая",
      coordinates: { lat: 51.1801, lng: 87.2871 }
    },
    {
      id: 2,
      name: "Камчатка",
      region: "Камчатский край",
      animals: ["Бурый медведь", "Лисица", "Сивуч"],
      bestTime: "Июль-сентябрь",
      difficulty: "Очень высокая",
      coordinates: { lat: 56.1184, lng: 159.3744 }
    },
    {
      id: 3,
      name: "Валдайский национальный парк",
      region: "Новгородская область",
      animals: ["Лось", "Кабан", "Рысь"],
      bestTime: "Круглый год",
      difficulty: "Средняя",
      coordinates: { lat: 57.9778, lng: 33.2556 }
    }
  ];

  const renderHome = () => (
    <div className="space-y-16">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-green-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/56c872c2-2861-4905-bb5e-7a1f255d4baf.jpg" 
            alt="Фотоохотник в лесу"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Фотоохота
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg max-w-2xl mx-auto">
            Искусство запечатлеть дикую природу в её естественной красоте
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
              onClick={() => setActiveSection('equipment')}
            >
              <Icon name="Camera" className="mr-2" size={20} />
              Оборудование
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg"
              onClick={() => setActiveSection('tips')}
            >
              <Icon name="Lightbulb" className="mr-2" size={20} />
              Советы
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">
              Откройте мир дикой природы
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Фотоохота — это не просто хобби, это страсть к природе и искусству одновременно
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:scale-105 transition-all duration-300 bg-card border-primary/20">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Target" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">Точность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Каждый кадр требует терпения и мастерства для достижения идеального момента
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 bg-card border-secondary/20">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Heart" size={32} className="text-secondary" />
                </div>
                <CardTitle className="font-serif text-xl">Любовь к природе</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Уважение к дикой природе и её обитателям — основа этичной фотоохоты
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 bg-card border-orange-500/20">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Award" size={32} className="text-orange-600" />
                </div>
                <CardTitle className="font-serif text-xl">Мастерство</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Постоянное развитие навыков и изучение поведения животных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );

  const renderEquipment = () => (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-primary mb-4">
            Профессиональное оборудование
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Правильный выбор снаряжения — залог успешной фотоохоты
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipmentItems.map((item) => (
            <Card key={item.id} className="group hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                  <div className="flex items-center">
                    <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm text-muted-foreground">{item.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={item.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                    <p className="text-2xl font-bold text-primary">{item.price}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {item.description}
                </CardDescription>
                <Button className="w-full mt-4" variant="outline">
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTips = () => (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-primary mb-4">
            Советы от профессионалов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Практические рекомендации для успешной фотоохоты
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {photographyTips.map((tip) => (
            <Card key={tip.id} className="group hover:scale-105 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon name={tip.icon} size={24} className="text-secondary" />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2">
                      {tip.category}
                    </Badge>
                    <CardTitle className="text-xl">{tip.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  {tip.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderLocations = () => (
    <div className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-primary mb-4">
            Лучшие локации для фотоохоты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Интерактивная карта с проверенными местами для съемки дикой природы
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {photographyLocations.map((location) => (
              <Card key={location.id} className="group hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{location.name}</CardTitle>
                      <p className="text-muted-foreground">{location.region}</p>
                    </div>
                    <Badge 
                      variant={location.difficulty === 'Высокая' || location.difficulty === 'Очень высокая' ? 'destructive' : 'secondary'}
                    >
                      {location.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Животные:</p>
                      <div className="flex flex-wrap gap-1">
                        {location.animals.map((animal, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {animal}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Icon name="Calendar" size={16} className="text-muted-foreground" />
                        <span>{location.bestTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="MapPin" size={16} className="text-muted-foreground" />
                        <span>{location.coordinates.lat.toFixed(2)}, {location.coordinates.lng.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-card rounded-lg p-6 border">
            <div className="aspect-square bg-gradient-to-br from-green-100 to-amber-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Icon name="Map" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-primary mb-2">
                  Интерактивная карта
                </h3>
                <p className="text-muted-foreground">
                  Здесь будет размещена интерактивная карта с отмеченными локациями для фотоохоты
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background font-sans">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="font-serif text-2xl font-bold text-primary cursor-pointer"
              onClick={() => setActiveSection('home')}
            >
              🦌 Фотоохота
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => setActiveSection('home')}
                className={`transition-colors duration-200 ${
                  activeSection === 'home' 
                    ? 'text-primary font-medium' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveSection('equipment')}
                className={`transition-colors duration-200 ${
                  activeSection === 'equipment' 
                    ? 'text-primary font-medium' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                Оборудование
              </button>
              <button
                onClick={() => setActiveSection('tips')}
                className={`transition-colors duration-200 ${
                  activeSection === 'tips' 
                    ? 'text-primary font-medium' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                Советы
              </button>
              <button
                onClick={() => setActiveSection('locations')}
                className={`transition-colors duration-200 ${
                  activeSection === 'locations' 
                    ? 'text-primary font-medium' 
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                Локации
              </button>
            </div>

            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {activeSection === 'home' && renderHome()}
        {activeSection === 'equipment' && renderEquipment()}
        {activeSection === 'tips' && renderTips()}
        {activeSection === 'locations' && renderLocations()}
      </main>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">🦌 Фотоохота</h3>
              <p className="text-primary-foreground/80">
                Ваш гид в мире профессиональной фотографии дикой природы
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Разделы</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p className="cursor-pointer hover:text-primary-foreground transition-colors">Оборудование</p>
                <p className="cursor-pointer hover:text-primary-foreground transition-colors">Советы</p>
                <p className="cursor-pointer hover:text-primary-foreground transition-colors">Локации</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Контакты</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>info@photohunt.ru</p>
                <p>+7 (495) 123-45-67</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Фотоохота. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;