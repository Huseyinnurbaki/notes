# attributed string

    
    let textFirstPart = " üyeliğiniz kapsamında acdvsfv "
    let textMiddlePart = "sasasasaa Metni"
    let textRest = "'ni okudum ve anladım."
    
    let textAttributedPart = textFirstPart + textMiddlePart + textRest
    
    let attributedString = NSMutableAttributedString(string: textAttributedPart)


    desc.textColor = Color.greyishBrown.value
    desc.font = UIFont(name: "SFProRounded-Regular", size: 14)
    desc.numberOfLines = 3
    desc.translatesAutoresizingMaskIntoConstraints = false
    desc.textAlignment = .left
    
    attributedString.addAttribute(NSAttributedString.Key.underlineStyle, value: 1, range: NSRange(location: textFirstPart.count + 1, length: textMiddlePart.count));
    attributedString.addAttribute(NSAttributedString.Key.foregroundColor, value: UIColor.red , range: NSRange(location: textFirstPart.count + 1, length: textMiddlePart.count))

    desc.attributedText = attributedString