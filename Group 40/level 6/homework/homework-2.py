# ახსენით კომენტარებით რა არის case-sensitive language და გააკეთეთ რამოდენიმე მაგალითიც

# case-sensitive language არის პროგრამირების ენა, სადაც მნიშვნელობა ენიჭება დიდ და პატარა ასოს ცვლადების დეკლარირებისას, მაგ.:

Name = "Meli"
print(name) # კოდი გამოიტანს შეცდომას, ვინაიდან ცვლადი Name არის დიდი ასოთი, ხოლო ცვლადის ბეჭდვისას ცვლადი დაწერილი გვაქვს პატარა ასოთი, შესაბამისად კომპიუტერი მას ვერ ცნობს. Name და name მიუხედავად იმისა, რომ ერთი და იგივე სიტყვაა, რადგანაც ერთი დიდი ასოთია და მეორე პატარა ასოთი, ისინი ორი სხვადასხვა ცვლადია.

Name = "Meli"
name = "Nino"
NAME = "Tiko"
print(Name)
print(name)
print(NAME)
# Name, name და NAME სხვადასხვა ცვლადებია, რადგან ერთი დიდი ასოთია, მეორე პატარათი, მესამე კი დიდი ასოებით. შესაბამისად, მათში სხვადასხვა ინფორმაციის შენახვა შეიძლება.