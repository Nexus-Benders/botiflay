import SectionHeader from "../headers/section-header";

function Testimonial() {
  const testimonials = {
    row1: [
      {
        text: "BotiFlay completely transformed our product. The new UI feels clean, modern, and so much easier for our customers to use.",
        name: "Willium Santo",
        title: "CTO of Kiako Studio",
        avatar:
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      },
      {
        text: "Working with BotiFlay was a smooth experience. They really understood our business needs and turned them into a beautiful design.",
        name: "Azin Savant",
        title: "IBM UX Designer",
        avatar:
          "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      },
      {
        text: "Our user engagement went up immediately after launching the new design. The BotiFlay team delivered both functionality and aesthetics.",
        name: "Olivia Mulligan",
        title: "Founder",
        avatar:
          "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      },
      {
        text: "BotiFlay completely transformed our product. The new UI feels clean, modern, and so much easier for our customers to use.",
        name: "Willium Santo",
        title: "CTO of Kiako Studio",
        avatar:
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      },
      {
        text: "Working with BotiFlay was a smooth experience. They really understood our business needs and turned them into a beautiful design.",
        name: "Azin Savant",
        title: "IBM UX Designer",
        avatar:
          "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      },
    ],
    row2: [
      {
        text: "Professional, responsive, and detail-oriented—BotiFlay delivered exactly what we needed. The design was intuitive and polished.",
        name: "Michael Adams",
        title: "Product Manager",
        avatar:
          "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      },
      {
        text: "BotiFlay gave our brand a fresh, consistent look across web and mobile. Customers keep complimenting the design!",
        name: "Sarah Thompson",
        title: "Co-Founder",
        avatar:
          "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      },
      {
        text: "We've worked with other agencies before, but BotiFlay really raised the bar for what great UX design should be.",
        name: "James Clark",
        title: "Business Development Manager",
        avatar:
          "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150",
      },
      {
        text: "Professional, responsive, and detail-oriented—BotiFlay delivered exactly what we needed. The design was intuitive and polished.",
        name: "Michael Adams",
        title: "Product Manager",
        avatar:
          "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      },
      {
        text: "BotiFlay gave our brand a fresh, consistent look across web and mobile. Customers keep complimenting the design!",
        name: "Sarah Thompson",
        title: "Co-Founder",
        avatar:
          "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      },
    ],
  };

  return (
    <div className="py-20  overflow-hidden flex justify-center items-center">
      <div className=" mx-auto text-center space-y-16">
        <SectionHeader headline={"OUR HAPPY CLIENTS"} hasBlackBg />
        <div className="space-y-8">
          <div className="relative">
            <div className="flex gap-6 animate-scroll-left text-start">
              {[...testimonials.row1, ...testimonials.row1].map(
                (testimonial, index) => (
                  <Card key={index} testimonial={testimonial} />
                )
              )}
            </div>
          </div>

          <div className="relative">
            <div className="flex gap-6 animate-scroll-right text-start">
              {[...testimonials.row2, ...testimonials.row2].map(
                (testimonial, index) => (
                  <Card key={index} testimonial={testimonial} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

function Card({
  testimonial,
}: {
  testimonial: {
    text: string;
    name: string;
    title: string;
    avatar: string;
  };
}) {
  return (
    <div className="flex-shrink-0 w-[420px] bg-[#2a2a2a] rounded-2xl p-8  border-white/10 border-[1px] ">
      <p className="text-white leading-6 text-base font-[400]  mb-8 min-h-[96px]">
        {testimonial.text}
      </p>
      <div className="flex items-center gap-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h3 className="text-[#F4F3F3] font-[500] leading-8 text-2xl">
            {testimonial.name}
          </h3>
          <p className="text-[#F4F3F3] leading-5 font-[400] text-sm">
            {testimonial.title}
          </p>
        </div>
      </div>
    </div>
  );
}
