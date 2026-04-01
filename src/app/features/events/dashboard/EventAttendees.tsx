export default function EventAttendees() {
    return (
        <div className="avatar-group -space-x-5">
            {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="avatar">
                    <div className="w-12">
                        <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" alt="attendee avatar" />
                    </div>
                </div>
            ))}
        </div>
    )
}