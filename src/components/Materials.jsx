export default function Materials() {
  const materials = [
    { id: 1, name: 'ЯСЕНЬ', description: 'Твердий та довговічний матеріал з виразною текстурою.', imageSrc: '/images/ash.png' },
    { id: 2, name: 'ВІЛЬХА', description: 'М\'яке дерево з приємним червонуватим відтінком.', imageSrc: '/images/alder.png' },
    { id: 3, name: 'ДУБ', description: 'Міцний, стійкий до зношування, з характерною текстурою.', imageSrc: '/images/oak.png' },
    { id: 4, name: 'ГОРІХ', description: 'Має темний відтінок і гарно виглядає в інтер\'єрі.', imageSrc: '/images/walnut.png' },
  ];

  return (
    <>
      <div className="text-center mb-12">
        <div className="text-center">
        <h2 className="text-black px-4 py-2 rounded tracking-wider text-[2vw]">МАТЕРІАЛИ</h2>
        </div>
        <p className="text-lg text-gray-600 mt-2">Ми працюємо з різними типами деревини для створення якісних виробів</p>
      </div>  

      <div className="container w-[80vw] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {materials.map((material) => (
          <div key={material.id} className="p-6 flex flex-col items-center">
            <img
              src={material.imageSrc}
              alt={material.name}
              className="w-full h-auto object-cover mb-4 rounded-md"
            />
            <h3 className="text-[1.4vw] font-regular mb-4">{material.name}</h3>
            <p className="text-gray-600 text-center">{material.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}