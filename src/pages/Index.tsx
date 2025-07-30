import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="min-h-screen bg-elegant-warm">
      {/* Header */}
      <header className="bg-elegant-black text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-display text-2xl font-bold text-elegant-gold">
            Nest.Catering
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="font-body hover:text-elegant-gold transition-colors">Услуги</a>
            <a href="#process" className="font-body hover:text-elegant-gold transition-colors">Процесс</a>
            <a href="#contact" className="font-body hover:text-elegant-gold transition-colors">Контакты</a>
          </nav>
          <Button className="bg-elegant-gold text-elegant-black hover:bg-elegant-gold/90 font-body font-medium">
            Оставить заявку
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-elegant-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-elegant-gold animate-fade-in">
            Nest.Catering
          </h1>
          <p className="font-display text-2xl md:text-3xl mb-8 italic animate-fade-in">
            Создаём уютные гастрономические впечатления
          </p>
          <p className="font-body text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-200 animate-fade-in">
            Индивидуальный подход к каждому событию. Профессиональная команда. Свежие ингредиенты от локальных поставщиков.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="bg-elegant-gold text-elegant-black hover:bg-elegant-gold/90 font-body font-medium text-lg px-8 py-3">
              Получить меню
            </Button>
            <Button size="lg" variant="outline" className="border-elegant-gold text-elegant-gold hover:bg-elegant-gold hover:text-elegant-black font-body font-medium text-lg px-8 py-3">
              Примеры мероприятий
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-elegant-black">
            Почему выбирают нас?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Icon name="Users" size={48} className="text-elegant-gold mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold mb-4 text-elegant-black">
                  Индивидуальный подход
                </h3>
                <p className="font-body text-elegant-gray">
                  Меню под ваш вкус и бюджет. Учитываем все пожелания и диетические требования.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Icon name="ChefHat" size={48} className="text-elegant-gold mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold mb-4 text-elegant-black">
                  Профессиональная команда
                </h3>
                <p className="font-body text-elegant-gray">
                  Шеф-повара и официанты с ресторанным опытом работы более 10 лет.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Icon name="Leaf" size={48} className="text-elegant-gold mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold mb-4 text-elegant-black">
                  Свежие ингредиенты
                </h3>
                <p className="font-body text-elegant-gray">
                  Работаем с локальными фермерами и проверенными поставщиками продуктов.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <Icon name="CheckCircle" size={48} className="text-elegant-gold mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold mb-4 text-elegant-black">
                  Полный цикл сервиса
                </h3>
                <p className="font-body text-elegant-gray">
                  От разработки меню до уборки после мероприятия. Берём всё на себя.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-elegant-black">
            Наши услуги
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-elegant-warm shadow-lg">
              <CardContent className="p-8">
                <Icon name="Building" size={40} className="text-elegant-gold mb-4" />
                <h3 className="font-display text-2xl font-semibold mb-4 text-elegant-black">
                  Корпоративный кейтеринг
                </h3>
                <ul className="font-body text-elegant-gray space-y-2">
                  <li>• Бизнес-ланчи и кофе-брейки</li>
                  <li>• Фуршеты и банкеты для сотрудников</li>
                  <li>• Тематические корпоративы</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-elegant-warm shadow-lg">
              <CardContent className="p-8">
                <Icon name="Heart" size={40} className="text-elegant-gold mb-4" />
                <h3 className="font-display text-2xl font-semibold mb-4 text-elegant-black">
                  Свадебный кейтеринг
                </h3>
                <ul className="font-body text-elegant-gray space-y-2">
                  <li>• Элегантные банкеты и фуршеты</li>
                  <li>• Дегустация меню перед событием</li>
                  <li>• Специальные детские и диетические блюда</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-elegant-warm shadow-lg">
              <CardContent className="p-8">
                <Icon name="PartyPopper" size={40} className="text-elegant-gold mb-4" />
                <h3 className="font-display text-2xl font-semibold mb-4 text-elegant-black">
                  Праздничный кейтеринг
                </h3>
                <ul className="font-body text-elegant-gray space-y-2">
                  <li>• Дни рождения, юбилеи, детские праздники</li>
                  <li>• BBQ и летние вечеринки</li>
                  <li>• Канапе и коктейльные фуршеты</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-elegant-warm shadow-lg">
              <CardContent className="p-8">
                <Icon name="Truck" size={40} className="text-elegant-gold mb-4" />
                <h3 className="font-display text-2xl font-semibold mb-4 text-elegant-black">
                  Доставка премиум-еды
                </h3>
                <ul className="font-body text-elegant-gray space-y-2">
                  <li>• Готовые наборы, сеты, гастробоксы</li>
                  <li>• Здоровое питание</li>
                  <li>• Сезонные и праздничные меню</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-elegant-black">
            Как мы работаем?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-elegant-gold text-elegant-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
              <h3 className="font-display text-xl font-semibold mb-4 text-elegant-black">Обсуждаем</h3>
              <p className="font-body text-elegant-gray">Ваши пожелания, бюджет и формат мероприятия</p>
            </div>
            <div className="text-center">
              <div className="bg-elegant-gold text-elegant-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
              <h3 className="font-display text-xl font-semibold mb-4 text-elegant-black">Предлагаем</h3>
              <p className="font-body text-elegant-gray">Несколько вариантов меню на выбор с расчётом стоимости</p>
            </div>
            <div className="text-center">
              <div className="bg-elegant-gold text-elegant-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
              <h3 className="font-display text-xl font-semibold mb-4 text-elegant-black">Готовим</h3>
              <p className="font-body text-elegant-gray">С любовью и вниманием к деталям из свежих продуктов</p>
            </div>
            <div className="text-center">
              <div className="bg-elegant-gold text-elegant-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">4</div>
              <h3 className="font-display text-xl font-semibold mb-4 text-elegant-black">Обслуживаем</h3>
              <p className="font-body text-elegant-gray">Безупречный сервис в день вашего мероприятия</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-elegant-black">
            Наши преимущества
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <Icon name="Zap" size={48} className="text-elegant-gold mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold mb-4 text-elegant-black">Гибкость</h3>
              <p className="font-body text-elegant-gray">Адаптируемся под любые запросы и особые пожелания клиентов</p>
            </div>
            <div className="p-6">
              <Icon name="Leaf" size={48} className="text-elegant-gold mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold mb-4 text-elegant-black">Экологичность</h3>
              <p className="font-body text-elegant-gray">Минимум пластика, сезонные продукты, заботимся о природе</p>
            </div>
            <div className="p-6">
              <Icon name="Palette" size={48} className="text-elegant-gold mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold mb-4 text-elegant-black">Креатив</h3>
              <p className="font-body text-elegant-gray">Авторские блюда и нестандартная подача для ваших гостей</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-elegant-black text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-8 text-elegant-gold">
            Закажите расчёт меню прямо сейчас!
          </h2>
          <p className="font-body text-xl text-center mb-12 text-gray-200">
            Оставьте заявку и мы свяжемся с вами в течение часа
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="bg-elegant-gray border-elegant-gold border">
                <CardContent className="p-8">
                  <h3 className="font-display text-2xl font-semibold mb-6 text-elegant-gold">Оставьте заявку</h3>
                  <form className="space-y-4">
                    <Input 
                      placeholder="Ваше имя" 
                      className="bg-white text-elegant-black border-elegant-gold"
                    />
                    <Input 
                      placeholder="Телефон" 
                      className="bg-white text-elegant-black border-elegant-gold"
                    />
                    <Input 
                      placeholder="Email" 
                      className="bg-white text-elegant-black border-elegant-gold"
                    />
                    <Textarea 
                      placeholder="Расскажите о вашем мероприятии"
                      rows={4}
                      className="bg-white text-elegant-black border-elegant-gold"
                    />
                    <Button className="w-full bg-elegant-gold text-elegant-black hover:bg-elegant-gold/90 font-body font-medium">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-semibold mb-6 text-elegant-gold">Контакты</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" className="text-elegant-gold" />
                    <span className="font-body text-lg">+7 (XXX) XXX-XX-XX</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" className="text-elegant-gold" />
                    <span className="font-body text-lg">hello@nest.catering</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" className="text-elegant-gold" />
                    <span className="font-body text-lg">Мариуполь, ДНР</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Instagram" className="text-elegant-gold" />
                    <span className="font-body text-lg">@nest.catering</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-elegant-gray text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="font-display text-2xl font-bold text-elegant-gold mb-4">
            Nest.Catering
          </div>
          <p className="font-body text-gray-300 mb-4">
            Ваши события в тёплых гастрономических тонах!
          </p>
          <p className="font-body text-sm text-gray-400">
            © 2024 Nest.Catering. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;