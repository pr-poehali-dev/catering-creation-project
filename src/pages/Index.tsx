import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-elegant-warm via-elegant-champagne to-elegant-warm">
      {/* Header */}
      <header className="luxury-gradient text-white py-6 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-elegant-gold/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
          <div className="font-display text-3xl font-bold text-elegant-gold tracking-wider">
            Nest.Catering
          </div>
          <nav className="hidden md:flex space-x-12">
            <a href="#services" className="font-body text-elegant-champagne hover:text-elegant-gold transition-all duration-300 tracking-wide">Услуги</a>
            <a href="#process" className="font-body text-elegant-champagne hover:text-elegant-gold transition-all duration-300 tracking-wide">Процесс</a>
            <a href="#contact" className="font-body text-elegant-champagne hover:text-elegant-gold transition-all duration-300 tracking-wide">Контакты</a>
          </nav>
          <Button className="gold-gradient text-elegant-black hover:scale-105 font-body font-semibold px-8 py-3 transition-all duration-300 shadow-lg">
            Оставить заявку
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative luxury-gradient text-white py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-elegant-black/80 via-elegant-gray/60 to-elegant-black/80"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-elegant-gold blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-elegant-bronze blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="font-display text-7xl md:text-9xl font-black mb-8 text-elegant-gold animate-fade-in text-shadow-luxury tracking-wider">
            Nest.Catering
          </h1>
          <p className="font-luxury text-3xl md:text-4xl mb-12 italic animate-fade-in text-elegant-champagne font-light tracking-wide">
            Создаём уютные гастрономические впечатления
          </p>
          <p className="font-body text-xl md:text-2xl mb-16 max-w-4xl mx-auto text-elegant-platinum animate-fade-in leading-relaxed">
            Индивидуальный подход к каждому событию. Профессиональная команда с ресторанным опытом. 
            Свежие ингредиенты от отборных поставщиков.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
            <Button size="lg" className="gold-gradient text-elegant-black hover:scale-105 font-body font-bold text-xl px-12 py-4 shadow-2xl transition-all duration-300">
              Получить меню
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-elegant-gold text-elegant-gold hover:bg-elegant-gold hover:text-elegant-black font-body font-bold text-xl px-12 py-4 shadow-2xl transition-all duration-300 backdrop-blur-sm">
              Примеры мероприятий
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-6 bg-elegant-warm relative">
        <div className="absolute inset-0 bg-gradient-to-br from-elegant-champagne/30 to-elegant-warm"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-center mb-20 text-elegant-black tracking-wide">
            Почему выбирают нас?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <Card className="bg-white/80 backdrop-blur-lg shadow-2xl hover-lift border-elegant-gold/20 border">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 mx-auto mb-6 gold-gradient rounded-full flex items-center justify-center shadow-lg">
                  <Icon name="Users" size={48} className="text-elegant-black" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-6 text-elegant-black tracking-wide">
                  Индивидуальный подход
                </h3>
                <p className="font-body text-elegant-gray leading-relaxed text-lg">
                  Меню под ваш вкус и бюджет. Учитываем все пожелания и диетические требования.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-lg shadow-2xl hover-lift border-elegant-gold/20 border">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 mx-auto mb-6 gold-gradient rounded-full flex items-center justify-center shadow-lg">
                  <Icon name="ChefHat" size={48} className="text-elegant-black" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-6 text-elegant-black tracking-wide">
                  Профессиональная команда
                </h3>
                <p className="font-body text-elegant-gray leading-relaxed text-lg">
                  Шеф-повара и официанты с ресторанным опытом работы более 10 лет.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-lg shadow-2xl hover-lift border-elegant-gold/20 border">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 mx-auto mb-6 gold-gradient rounded-full flex items-center justify-center shadow-lg">
                  <Icon name="Leaf" size={48} className="text-elegant-black" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-6 text-elegant-black tracking-wide">
                  Свежие ингредиенты
                </h3>
                <p className="font-body text-elegant-gray leading-relaxed text-lg">
                  Работаем с локальными фермерами и проверенными поставщиками продуктов.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-lg shadow-2xl hover-lift border-elegant-gold/20 border">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 mx-auto mb-6 gold-gradient rounded-full flex items-center justify-center shadow-lg">
                  <Icon name="CheckCircle" size={48} className="text-elegant-black" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-6 text-elegant-black tracking-wide">
                  Полный цикл сервиса
                </h3>
                <p className="font-body text-elegant-gray leading-relaxed text-lg">
                  От разработки меню до уборки после мероприятия. Берём всё на себя.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-elegant-gold/10 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-center mb-20 text-elegant-black tracking-wide">
            Наши услуги
          </h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="bg-gradient-to-br from-elegant-champagne to-elegant-warm shadow-2xl hover-lift border-elegant-gold/30 border">
              <CardContent className="p-12">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 gold-gradient rounded-lg flex items-center justify-center mr-6 shadow-lg">
                    <Icon name="Building" size={32} className="text-elegant-black" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-elegant-black tracking-wide">
                    Корпоративный кейтеринг
                  </h3>
                </div>
                <ul className="font-body text-elegant-gray space-y-4 text-lg leading-relaxed">
                  <li className="flex items-center"><span className="w-2 h-2 bg-elegant-gold rounded-full mr-4"></span>Бизнес-ланчи и кофе-брейки</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-elegant-gold rounded-full mr-4"></span>Фуршеты и банкеты для сотрудников</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-elegant-gold rounded-full mr-4"></span>Тематические корпоративы</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-elegant-champagne to-elegant-warm shadow-2xl hover-lift border-elegant-gold/30 border">
              <CardContent className="p-12">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 gold-gradient rounded-lg flex items-center justify-center mr-6 shadow-lg">
                    <Icon name="Heart" size={32} className="text-elegant-black" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-elegant-black tracking-wide">
                    Свадебный кейтеринг
                  </h3>
                </div>
                <ul className="font-body text-elegant-gray space-y-4 text-lg leading-relaxed">
                  <li className="flex items-center"><span className="w-2 h-2 bg-elegant-gold rounded-full mr-4"></span>Элегантные банкеты и фуршеты</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-elegant-gold rounded-full mr-4"></span>Дегустация меню перед событием</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-elegant-gold rounded-full mr-4"></span>Специальные детские и диетические блюда</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-elegant-champagne to-elegant-warm shadow-2xl hover-lift border-elegant-gold/30 border">
              <CardContent className="p-12">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 gold-gradient rounded-lg flex items-center justify-center mr-6 shadow-lg">
                    <Icon name="PartyPopper" size={32} className="text-elegant-black" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-elegant-black tracking-wide">
                    Праздничный кейтеринг
                  </h3>
                </div>
                <ul className="font-body text-elegant-gray space-y-4 text-lg leading-relaxed">
                  <li className="flex items-center"><span className="w-2 h-2 bg-elegant-gold rounded-full mr-4"></span>Дни рождения, юбилеи, детские праздники</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-elegant-gold rounded-full mr-4"></span>BBQ и летние вечеринки</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-elegant-gold rounded-full mr-4"></span>Канапе и коктейльные фуршеты</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-elegant-champagne to-elegant-warm shadow-2xl hover-lift border-elegant-gold/30 border">
              <CardContent className="p-12">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 gold-gradient rounded-lg flex items-center justify-center mr-6 shadow-lg">
                    <Icon name="Truck" size={32} className="text-elegant-black" />
                  </div>
                  <h3 className="font-display text-3xl font-bold text-elegant-black tracking-wide">
                    Доставка премиум-еды
                  </h3>
                </div>
                <ul className="font-body text-elegant-gray space-y-4 text-lg leading-relaxed">
                  <li className="flex items-center"><span className="w-2 h-2 bg-elegant-gold rounded-full mr-4"></span>Готовые наборы, сеты, гастробоксы</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-elegant-gold rounded-full mr-4"></span>Здоровое питание</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-elegant-gold rounded-full mr-4"></span>Сезонные и праздничные меню</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 px-6 bg-gradient-to-br from-elegant-warm to-elegant-champagne">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-center mb-20 text-elegant-black tracking-wide">
            Как мы работаем?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center group">
              <div className="gold-gradient text-elegant-black w-24 h-24 rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-all duration-300">1</div>
              <h3 className="font-display text-2xl font-bold mb-6 text-elegant-black tracking-wide">Обсуждаем</h3>
              <p className="font-body text-elegant-gray text-lg leading-relaxed">Ваши пожелания, бюджет и формат мероприятия в деталях</p>
            </div>
            <div className="text-center group">
              <div className="gold-gradient text-elegant-black w-24 h-24 rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-all duration-300">2</div>
              <h3 className="font-display text-2xl font-bold mb-6 text-elegant-black tracking-wide">Предлагаем</h3>
              <p className="font-body text-elegant-gray text-lg leading-relaxed">Несколько вариантов меню на выбор с детальным расчётом стоимости</p>
            </div>
            <div className="text-center group">
              <div className="gold-gradient text-elegant-black w-24 h-24 rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-all duration-300">3</div>
              <h3 className="font-display text-2xl font-bold mb-6 text-elegant-black tracking-wide">Готовим</h3>
              <p className="font-body text-elegant-gray text-lg leading-relaxed">С любовью и вниманием к деталям из отборных свежих продуктов</p>
            </div>
            <div className="text-center group">
              <div className="gold-gradient text-elegant-black w-24 h-24 rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-all duration-300">4</div>
              <h3 className="font-display text-2xl font-bold mb-6 text-elegant-black tracking-wide">Обслуживаем</h3>
              <p className="font-body text-elegant-gray text-lg leading-relaxed">Безупречный сервис и внимание к каждой детали в день события</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-elegant-bronze/10 to-transparent rounded-full translate-y-32 -translate-x-32"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-20 text-elegant-black tracking-wide">
            Наши преимущества
          </h2>
          <div className="grid md:grid-cols-3 gap-16">
            <div className="p-10 group hover-lift">
              <div className="w-24 h-24 mx-auto mb-8 gold-gradient rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                <Icon name="Zap" size={48} className="text-elegant-black" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-6 text-elegant-black tracking-wide">Гибкость</h3>
              <p className="font-body text-elegant-gray text-lg leading-relaxed">Адаптируемся под любые запросы и особые пожелания клиентов</p>
            </div>
            <div className="p-10 group hover-lift">
              <div className="w-24 h-24 mx-auto mb-8 gold-gradient rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                <Icon name="Leaf" size={48} className="text-elegant-black" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-6 text-elegant-black tracking-wide">Экологичность</h3>
              <p className="font-body text-elegant-gray text-lg leading-relaxed">Минимум пластика, сезонные продукты, заботимся о природе</p>
            </div>
            <div className="p-10 group hover-lift">
              <div className="w-24 h-24 mx-auto mb-8 gold-gradient rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300">
                <Icon name="Palette" size={48} className="text-elegant-black" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-6 text-elegant-black tracking-wide">Креатив</h3>
              <p className="font-body text-elegant-gray text-lg leading-relaxed">Авторские блюда и нестандартная подача для ваших гостей</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 luxury-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-elegant-black/90 via-elegant-gray/70 to-elegant-black/90"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-elegant-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-elegant-bronze/10 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-center mb-12 text-elegant-gold tracking-wide text-shadow-luxury">
            Закажите расчёт меню прямо сейчас!
          </h2>
          <p className="font-luxury text-2xl md:text-3xl text-center mb-16 text-elegant-champagne italic font-light">
            Оставьте заявку и мы свяжемся с вами в течение часа
          </p>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Card className="bg-white/10 backdrop-blur-lg border-elegant-gold/30 border-2 shadow-2xl">
                <CardContent className="p-12">
                  <h3 className="font-display text-3xl font-bold mb-8 text-elegant-gold tracking-wide">Оставьте заявку</h3>
                  <form className="space-y-6">
                    <Input 
                      placeholder="Ваше имя" 
                      className="bg-white/90 text-elegant-black border-elegant-gold/50 text-lg py-4 backdrop-blur-sm"
                    />
                    <Input 
                      placeholder="Телефон" 
                      className="bg-white/90 text-elegant-black border-elegant-gold/50 text-lg py-4 backdrop-blur-sm"
                    />
                    <Input 
                      placeholder="Email" 
                      className="bg-white/90 text-elegant-black border-elegant-gold/50 text-lg py-4 backdrop-blur-sm"
                    />
                    <Textarea 
                      placeholder="Расскажите о вашем мероприятии"
                      rows={5}
                      className="bg-white/90 text-elegant-black border-elegant-gold/50 text-lg backdrop-blur-sm"
                    />
                    <Button className="w-full gold-gradient text-elegant-black hover:scale-105 font-body font-bold text-lg py-4 shadow-2xl transition-all duration-300">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-12">
              <div>
                <h3 className="font-display text-3xl font-bold mb-8 text-elegant-gold tracking-wide">Контакты</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Icon name="Phone" className="text-elegant-black" />
                    </div>
                    <span className="font-body text-xl text-elegant-champagne">+7 (XXX) XXX-XX-XX</span>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Icon name="Mail" className="text-elegant-black" />
                    </div>
                    <span className="font-body text-xl text-elegant-champagne">hello@nest.catering</span>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Icon name="MapPin" className="text-elegant-black" />
                    </div>
                    <span className="font-body text-xl text-elegant-champagne">Мариуполь, ДНР</span>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Icon name="Instagram" className="text-elegant-black" />
                    </div>
                    <span className="font-body text-xl text-elegant-champagne">@nest.catering</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-elegant-black/95 text-white py-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-elegant-gray/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="font-display text-4xl font-bold text-elegant-gold mb-6 tracking-wider">
            Nest.Catering
          </div>
          <p className="font-luxury text-xl text-elegant-champagne mb-8 italic font-light">
            Ваши события в тёплых гастрономических тонах!
          </p>
          <div className="w-24 h-px bg-elegant-gold mx-auto mb-8"></div>
          <p className="font-body text-elegant-platinum">
            © 2024 Nest.Catering. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;